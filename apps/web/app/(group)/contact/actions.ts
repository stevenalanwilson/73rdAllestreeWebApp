'use server'

import { Resend } from 'resend'
import { contactConfig } from '@/lib/contact-config'

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  enquiryType: string
  message: string
}

export type SubmitResult = { ok: true } | { ok: false; error: string }

const ENQUIRY_LABELS: Record<string, string> = {
  squirrels:       'Joining — Squirrels (Ages 4–6)',
  beavers:         'Joining — Beavers (Ages 6–8)',
  cubs:            'Joining — Cubs (Ages 8–10.5)',
  scouts:          'Joining — Scouts (Ages 10.5–14)',
  'hall-booking':  'Hall booking',
  'vehicle-booking': 'Vehicle booking',
  general:         'General enquiry',
}

function buildEmailHtml(data: ContactFormData): string {
  const enquiryLabel = ENQUIRY_LABELS[data.enquiryType] ?? data.enquiryType

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="font-family:sans-serif;color:#001323;max-width:600px;margin:0 auto;padding:24px">
  <h1 style="font-size:20px;font-weight:700;margin-bottom:24px">
    New contact form submission
  </h1>
  <table style="width:100%;border-collapse:collapse">
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600;width:160px">Name</td>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb">${data.firstName} ${data.lastName}</td>
    </tr>
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600">Email</td>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb">
        <a href="mailto:${data.email}" style="color:#4D2177">${data.email}</a>
      </td>
    </tr>
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-weight:600">Enquiry type</td>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb">${enquiryLabel}</td>
    </tr>
    <tr>
      <td style="padding:10px 0;font-weight:600;vertical-align:top">Message</td>
      <td style="padding:10px 0;white-space:pre-wrap">${data.message}</td>
    </tr>
  </table>
  <p style="margin-top:32px;font-size:12px;color:#6b7280">
    Sent from the 73rd Allestree Scout Group website contact form.
  </p>
</body>
</html>
  `.trim()
}

export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  if (!contactConfig.resendApiKey) {
    return { ok: false, error: 'Email service is not configured. Please contact us directly.' }
  }

  const enquiryLabel = ENQUIRY_LABELS[data.enquiryType] ?? data.enquiryType
  const resend = new Resend(contactConfig.resendApiKey)

  const { error } = await resend.emails.send({
    from: `${contactConfig.fromName} <${contactConfig.fromEmail}>`,
    to: contactConfig.toEmail,
    replyTo: data.email,
    subject: `Contact form: ${enquiryLabel} — ${data.firstName} ${data.lastName}`,
    html: buildEmailHtml(data),
  })

  if (error) {
    return { ok: false, error: 'Failed to send your message. Please try again.' }
  }

  return { ok: true }
}
