# Nadeem Chauhan Consultancy Website

A modern, fully responsive website for Nadeem Chauhan Consultancy legal services using React, Tailwind CSS, and Framer Motion.

## Features

- Modern UI with clean Google-like design
- Responsive layout for all devices
- Dynamic service and blog pages
- Professional contact form
- Appointment scheduling system
- Custom WhatsApp-like chat widget with smart suggestions

## Deploying to Netlify

### Option 1: Deploy with Netlify CLI

1. **Install Netlify CLI** (if not already installed)
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the site**
   ```bash
   npm run build
   ```

3. **Create the Netlify functions directory in the build folder**
   ```bash
   mkdir -p dist/netlify/functions
   cp -r netlify/functions/* dist/netlify/functions/
   ```

4. **Login to Netlify**
   ```bash
   netlify login
   ```

5. **Initialize Netlify site**
   ```bash
   netlify init
   ```

6. **Deploy the site**
   ```bash
   netlify deploy --prod
   ```

7. **Set up environment variables**
   After deployment, go to the Netlify dashboard:
   - Navigate to Site settings > Environment variables
   - Add the following variables:
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASS`: Your Gmail app password

### Option 2: Deploy via Netlify Dashboard

1. **Prepare your repository**
   - Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. **Login to Netlify**
   - Go to [Netlify](https://app.netlify.com/) and login

3. **Create a new site**
   - Click "New site from Git"
   - Select your Git provider
   - Select your repository
   - Set the build command to: `npm run build && mkdir -p dist/netlify/functions && cp -r netlify/functions/* dist/netlify/functions/`
   - Set the publish directory to: `dist`
   - Click "Deploy site"

4. **Set up environment variables**
   - Navigate to Site settings > Environment variables
   - Add the following variables:
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASS`: Your Gmail app password

5. **Set up Netlify Functions**
   - The netlify.toml file should handle the redirect rules automatically

### Verifying your deployment

1. Visit your deployed site
2. Test the contact form
3. Test the appointment scheduling form
4. Verify that you receive email notifications

## Notes for Gmail Setup

If you're using Gmail as your email provider, you'll need to:

1. Enable 2-factor authentication
2. Generate an "App Password" for your application
3. Use this App Password as the `EMAIL_PASS` environment variable

## Credits

- Design: Nadeem Chauhan Consultancy
- Development: Shadab Choudhary
