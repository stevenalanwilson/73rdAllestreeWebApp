import type { Meta, StoryObj } from '@storybook/react'
import { PhotoGallery } from './PhotoGallery'
import type { PhotoItem } from './PhotoGallery'

const SAMPLE_PHOTOS: PhotoItem[] = Array.from({ length: 12 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    src: `/images/gallery/gallery-${n}.jpg`,
    thumbSrc: `/images/gallery/thumbs/gallery-${n}-thumb.jpg`,
    alt: `73rd Allestree Scouts out and about — photo ${i + 1}`,
  }
})

const meta: Meta<typeof PhotoGallery> = {
  title: 'Components/PhotoGallery',
  component: PhotoGallery,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof PhotoGallery>

export const Default: Story = {
  args: {
    photos: SAMPLE_PHOTOS,
  },
}

export const WithHeading: Story = {
  args: {
    photos: SAMPLE_PHOTOS,
    heading: 'Out and About',
  },
}

export const SinglePhoto: Story = {
  args: {
    photos: [SAMPLE_PHOTOS[0]],
    heading: 'Single photo',
  },
}

export const ThirtyPhotos: Story = {
  args: {
    photos: Array.from({ length: 30 }, (_, i) => {
      const n = String(i + 1).padStart(2, '0')
      return {
        src: `/images/gallery/gallery-${n}.jpg`,
        thumbSrc: `/images/gallery/thumbs/gallery-${n}-thumb.jpg`,
        alt: `73rd Allestree Scouts out and about — photo ${i + 1}`,
      }
    }),
    heading: 'Out and About — Full Gallery',
  },
}
