export const contactConfig = {
  /** Resend API key — required to send emails */
  resendApiKey: process.env.RESEND_API_KEY ?? '',

  /** Address all contact form submissions are delivered to */
  toEmail: process.env.CONTACT_EMAIL_TO ?? 'steven@dominion79.co.uk',

  /**
   * Address shown in the From field.
   * Must be a verified sender in your Resend account.
   * Use onboarding@resend.dev for local testing (no domain verification needed).
   */
  fromEmail: process.env.CONTACT_EMAIL_FROM ?? 'onboarding@resend.dev',

  /** Display name shown alongside the From address */
  fromName: process.env.CONTACT_EMAIL_FROM_NAME ?? '73rd Allestree Scout Group',
} as const
