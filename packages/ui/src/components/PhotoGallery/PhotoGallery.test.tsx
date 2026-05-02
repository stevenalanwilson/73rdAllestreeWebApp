import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe'
import { PhotoGallery } from './PhotoGallery'

expect.extend(toHaveNoViolations)

const PHOTOS = [
  { src: '/images/gallery/gallery-01.jpg', thumbSrc: '/images/gallery/thumbs/gallery-01-thumb.jpg', alt: 'Scouts on a hike' },
  { src: '/images/gallery/gallery-02.jpg', thumbSrc: '/images/gallery/thumbs/gallery-02-thumb.jpg', alt: 'Campfire evening' },
  { src: '/images/gallery/gallery-03.jpg', thumbSrc: '/images/gallery/thumbs/gallery-03-thumb.jpg', alt: 'Badge ceremony' },
]

describe('PhotoGallery', () => {
  describe('grid view', () => {
    it('renders all thumbnail images', () => {
      render(<PhotoGallery photos={PHOTOS} />)
      expect(screen.getAllByRole('button', { name: /view photo/i })).toHaveLength(3)
    })

    it('renders an optional heading', () => {
      render(<PhotoGallery photos={PHOTOS} heading="Out and About" />)
      expect(screen.getByRole('heading', { name: 'Out and About' })).toBeInTheDocument()
    })

    it('does not render a heading when omitted', () => {
      render(<PhotoGallery photos={PHOTOS} />)
      expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    })

    it('thumbnail buttons have accessible labels', () => {
      render(<PhotoGallery photos={PHOTOS} />)
      expect(screen.getByRole('button', { name: /scouts on a hike/i })).toBeInTheDocument()
    })
  })

  describe('lightbox', () => {
    it('lightbox is not shown initially', () => {
      render(<PhotoGallery photos={PHOTOS} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('opens lightbox when a thumbnail is clicked', async () => {
      const user = userEvent.setup()
      render(<PhotoGallery photos={PHOTOS} />)
      await user.click(screen.getByRole('button', { name: /scouts on a hike/i }))
      expect(screen.getByRole('dialog', { name: /photo lightbox/i })).toBeInTheDocument()
    })

    it('shows the correct image in the lightbox', async () => {
      const user = userEvent.setup()
      render(<PhotoGallery photos={PHOTOS} />)
      await user.click(screen.getByRole('button', { name: /scouts on a hike/i }))
      const dialog = screen.getByRole('dialog')
      expect(dialog.querySelector('img')).toHaveAttribute('src', '/images/gallery/gallery-01.jpg')
    })

    it('shows the photo counter', async () => {
      const user = userEvent.setup()
      render(<PhotoGallery photos={PHOTOS} />)
      await user.click(screen.getByRole('button', { name: /scouts on a hike/i }))
      expect(screen.getByText('1 / 3')).toBeInTheDocument()
    })

    it('closes lightbox when close button is clicked', async () => {
      const user = userEvent.setup()
      render(<PhotoGallery photos={PHOTOS} />)
      await user.click(screen.getByRole('button', { name: /scouts on a hike/i }))
      await user.click(screen.getByRole('button', { name: /close photo lightbox/i }))
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('closes lightbox on Escape key', async () => {
      const user = userEvent.setup()
      render(<PhotoGallery photos={PHOTOS} />)
      await user.click(screen.getByRole('button', { name: /scouts on a hike/i }))
      await user.keyboard('{Escape}')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('navigates to next photo', async () => {
      const user = userEvent.setup()
      render(<PhotoGallery photos={PHOTOS} />)
      await user.click(screen.getByRole('button', { name: /scouts on a hike/i }))
      await user.click(screen.getByRole('button', { name: /next photo/i }))
      expect(screen.getByText('2 / 3')).toBeInTheDocument()
    })

    it('navigates to previous photo', async () => {
      const user = userEvent.setup()
      render(<PhotoGallery photos={PHOTOS} />)
      await user.click(screen.getByRole('button', { name: /campfire evening/i }))
      await user.click(screen.getByRole('button', { name: /previous photo/i }))
      expect(screen.getByText('1 / 3')).toBeInTheDocument()
    })

    it('wraps around from last to first photo', async () => {
      const user = userEvent.setup()
      render(<PhotoGallery photos={PHOTOS} />)
      await user.click(screen.getByRole('button', { name: /badge ceremony/i }))
      await user.click(screen.getByRole('button', { name: /next photo/i }))
      expect(screen.getByText('1 / 3')).toBeInTheDocument()
    })

    it('focus returns to thumbnail after lightbox closes', async () => {
      const user = userEvent.setup()
      render(<PhotoGallery photos={PHOTOS} />)
      const thumbnail = screen.getByRole('button', { name: /scouts on a hike/i })
      await user.click(thumbnail)
      await user.keyboard('{Escape}')
      await waitFor(() => {
        expect(document.activeElement).toBe(thumbnail)
      })
    })
  })

  describe('accessibility', () => {
    it('gallery grid has no axe violations', async () => {
      const { container } = render(<PhotoGallery photos={PHOTOS} heading="Out and About" />)
      expect(await axe(container)).toHaveNoViolations()
    })

    it('lightbox open state has no axe violations', async () => {
      const user = userEvent.setup()
      const { container } = render(<PhotoGallery photos={PHOTOS} />)
      await user.click(screen.getByRole('button', { name: /scouts on a hike/i }))
      expect(await axe(container)).toHaveNoViolations()
    })
  })
})
