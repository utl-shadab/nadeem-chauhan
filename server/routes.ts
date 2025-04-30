import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string | Date;
  time: string;
  type: string;
  attorney: string;
  message?: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Add JSON content-type header to all responses
  app.use((req, res, next) => {
    // For API routes
    if (req.path.startsWith('/api/')) {
      res.setHeader('Content-Type', 'application/json');
    }
    next();
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Contact form route
  app.post("/api/contact", async (req, res) => {
    try {
      const formData: ContactFormData = req.body;
      
      // Basic validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // Configure email transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      
      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "shadab28696@gmail.com", // Email address specified in the requirements
        subject: `New Contact Form Submission - ${formData.service} Service`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
          <p><strong>Service Requested:</strong> ${formData.service}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `
      };
      
      // Send email
      await transporter.sendMail(mailOptions);
      
      // Store the contact request in database if needed
      const contactRequest = await storage.createContactRequest({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        service: formData.service,
        message: formData.message,
        createdAt: new Date()
      });
      
      return res.status(200).json({ 
        success: true, 
        message: "Your message has been sent successfully" 
      });
    } catch (error) {
      console.error("Error sending contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Appointment scheduler endpoint
  app.post("/api/schedule-appointment", async (req, res) => {
    try {
      const formData: AppointmentFormData = req.body;
      
      // Allow all email addresses to schedule appointments (commented out the restriction)
      // We only send confirmation emails to shadab28696@gmail.com as per requirements
      
      console.log('Appointment data:', formData);
      
      // Format appointment date and time for better readability
      const appointmentDate = new Date(formData.date);
      const formattedDate = appointmentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Get attorney name based on ID
      const attorneyNames: Record<string, string> = {
        'nadeem': 'Nadeem Chauhan',
        'ananya': 'Ananya Sharma',
        'rajiv': 'Rajiv Mehta',
        'priya': 'Priya Patel'
      };
      
      const attorneyName = attorneyNames[formData.attorney] || formData.attorney;
      
      // Get appointment type
      const appointmentTypes: Record<string, string> = {
        'initial': 'Initial Consultation',
        'followup': 'Follow-up Meeting',
        'legal-advice': 'Legal Advice Session',
        'document-review': 'Document Review',
        'case-discussion': 'Case Discussion'
      };
      
      const appointmentType = appointmentTypes[formData.type] || formData.type;
      
      // Configure email transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      
      // Send email notification
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'shadab28696@gmail.com', // Only send to this email
        subject: `Appointment Confirmation: ${appointmentType} on ${formattedDate}`,
        html: `
          <h1>Appointment Confirmation</h1>
          <p>Your appointment has been scheduled successfully!</p>
          
          <h2>Appointment Details</h2>
          <p><strong>Client:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${formData.time}</p>
          <p><strong>Type:</strong> ${appointmentType}</p>
          <p><strong>Attorney:</strong> ${attorneyName}</p>
          ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
          
          <p>We look forward to meeting with you.</p>
          
          <hr>
          <p>Nadeem Chauhan Consultancy<br>
          +91 9756188580<br>
          contact@nadeemchauhan.com</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({
        success: true,
        message: "Appointment scheduled successfully"
      });
    } catch (error) {
      console.error('Error handling appointment scheduling:', error);
      return res.status(500).json({ 
        success: false,
        message: "Failed to schedule appointment. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
