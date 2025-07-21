# Email Setup Instructions for Contact Form

## Overview
The contact form now has real email functionality using Nodemailer with Gmail SMTP. When users click "Send Message", the form will send an email with all the form fields to your specified email address.

## Setup Steps

### 1. Gmail Configuration (Recommended)
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled
   - Go to "App passwords" under "Signing in to Google"
   - Generate a new app password for "Mail"
   - Copy the 16-character password

### 2. Environment Variables
Update the `.env.local` file with your credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=nikprajapati2019@gmail.com
```

### 3. Test the Functionality
1. Fill out the contact form with test data
2. Click "Send Message"
3. Check your email inbox for the test message

## Alternative Email Services
If you prefer not to use Gmail, you can configure other services:

### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.your-provider.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Security Notes
- Never commit your actual email credentials to version control
- Use environment variables for sensitive data
- Consider adding rate limiting for production use
- The API endpoint includes basic validation and sanitization

## Troubleshooting
- **"Failed to send email"**: Check your Gmail app password and ensure 2FA is enabled
- **"Invalid credentials"**: Verify your email and app password are correct
- **"Connection timeout"**: Check your internet connection and firewall settings

## Production Deployment
For production, consider:
- Using a dedicated email service like SendGrid or AWS SES
- Adding CAPTCHA verification
- Implementing rate limiting
- Using a professional email service instead of personal Gmail
