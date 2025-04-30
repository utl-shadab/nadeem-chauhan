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
    // Parse the JSON body
    const formData = JSON.parse(event.body);
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
        headers: { 'Content-Type': 'application/json' }
      };
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
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully" 
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};