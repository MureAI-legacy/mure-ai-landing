# EmailJS Integration Setup Guide

## What's Been Done ✅

1. **Installed EmailJS package** - `@emailjs/browser` is now installed
2. **Created environment variables** - `.env.local` file with EmailJS configuration
3. **Updated contact form** - Integrated EmailJS functionality with error handling

## What You Need to Do 🔧

### Step 1: Get Your EmailJS Credentials

1. Go to your [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Navigate to **Email Services** and copy your **Service ID**
3. Go to **Email Templates** and copy your **Template ID**
4. Go to **Account** → **General** and copy your **Public Key**

### Step 2: Update Environment Variables

Edit the `.env.local` file in your project root and replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 3: Configure Your EmailJS Template

In your EmailJS template, use these variable names to receive the form data:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company}}` - User's company
- `{{phone}}` - User's phone number
- `{{project_type}}` - Selected project type
- `{{message}}` - User's message
- `{{to_email}}` - Your email (developer@mureai.com)

### Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email for the form submission

## How It Works 🔄

1. User fills out the contact form
2. Form data is sent to EmailJS using your configured service
3. EmailJS sends an email to `developer@mureai.com` using your template
4. User sees a success message
5. Form resets after 3 seconds

## Error Handling 🛡️

- Network errors are caught and displayed to the user
- Form validation ensures required fields are filled
- Error messages clear when user starts typing again

## Security Notes 🔒

- Your EmailJS public key is safe to expose in frontend code
- No sensitive data is stored in the frontend
- All email sending is handled by EmailJS servers

## Troubleshooting 🔧

If emails aren't being sent:

1. Check that all environment variables are correctly set
2. Verify your EmailJS service is active
3. Check the browser console for any error messages
4. Ensure your template variables match the ones in the code
5. Test with a simple template first

## Next Steps 🚀

Once everything is working:

1. Customize the email template to match your brand
2. Add more sophisticated error handling if needed
3. Consider adding form validation for phone numbers
4. Add analytics to track form submissions
