# Contact Form Setup Instructions

Your contact form is now configured to send emails to `contact@moeezrehman.quanter.dev` (which forwards to moeezrhmn@gmail.com) using Resend.

## Setup Steps

1. **Sign up for Resend** (Free):
   - Go to https://resend.com
   - Sign up for a free account
   - Verify your email address

2. **Get Your API Key**:
   - Once logged in, go to https://resend.com/api-keys
   - Click "Create API Key"
   - Give it a name (e.g., "Portfolio Contact Form")
   - Copy the generated API key

3. **Add API Key to Environment Variables**:
   - Open the `.env.local` file in your project root
   - Replace `your_resend_api_key_here` with your actual API key:
     ```
     RESEND_API_KEY=re_your_actual_api_key_here
     ```

4. **Restart Development Server**:
   ```bash
   npm run dev
   ```

5. **Test the Contact Form**:
   - Navigate to http://localhost:3000/contact
   - Fill out and submit the form
   - You should receive an email at contact@moeezrehman.quanter.dev (forwarded to moeezrhmn@gmail.com)

## Important Notes

- **Free Tier**: Resend's free tier allows 100 emails per day and 3,000 per month
- **Test Email**: By default, Resend uses `onboarding@resend.dev` as the sender
- **Custom Domain** (Optional): To use a custom "from" email (like contact@yourdomain.com), you need to:
  1. Add and verify your domain in Resend dashboard
  2. Update the `from` field in `/app/api/contact/route.ts`

## Files Modified

- `/app/contact/page.tsx` - Updated form submission to call API
- `/app/api/contact/route.ts` - New API endpoint for sending emails
- `.env.local` - Environment variable for API key
- `package.json` - Added Resend package

## Troubleshooting

- If emails aren't sending, check the browser console and terminal for errors
- Ensure your API key is correctly set in `.env.local`
- Make sure to restart the dev server after adding the API key
