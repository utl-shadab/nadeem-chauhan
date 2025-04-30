const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: { 'Content-Type': 'application/json' }
    };
  }

  try {
    const formData = JSON.parse(event.body);
    
    // Format appointment date and time for better readability
    const appointmentDate = new Date(formData.date);
    const formattedDate = appointmentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Get attorney name based on ID
    const attorneyNames = {
      'nadeem': 'Nadeem Chauhan',
      'ananya': 'Ananya Sharma',
      'rajiv': 'Rajiv Mehta',
      'priya': 'Priya Patel'
    };
    
    const attorneyName = attorneyNames[formData.attorney] || formData.attorney;
    
    // Get appointment type
    const appointmentTypes = {
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

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Appointment scheduled successfully"
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    console.error('Error handling appointment scheduling:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false,
        message: "Failed to schedule appointment. Please try again." 
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};