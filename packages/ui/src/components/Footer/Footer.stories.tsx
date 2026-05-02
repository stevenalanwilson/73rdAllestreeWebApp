import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
}
export default meta

export const Default: StoryObj<typeof Footer> = {}

export const WithSocialLinks: StoryObj<typeof Footer> = {
  args: {
    facebookHref: 'https://facebook.com',
    twitterHref: 'https://x.com',
    instagramHref: 'https://instagram.com',
  },
}
