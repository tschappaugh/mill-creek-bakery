import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Country Loaf with Rosemary',
    excerpt:
      'A rustic country loaf with fragrant rosemary and a crisp golden crust, made with our house starter.',
    tag: 'Sourdough',
    image: {
      src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800',
      alt: 'Country sourdough loaf',
    },
    href: '/breads/country-loaf-rosemary',
  },
}

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    title: 'Sourdough Baguette',
    tag: 'Baguettes',
    image: {
      src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?w=800',
      alt: 'Sourdough baguette',
    },
    href: '/breads/sourdough-baguette',
  },
}

export const Featured: Story = {
  args: {
    variant: 'featured',
    title: 'Our Signature Country Loaf',
    excerpt:
      'The bread that started it all. A naturally leavened country loaf with an open crumb, crisp crust, and complex flavor developed over a long cold fermentation.',
    tag: 'Sourdough',
    image: {
      src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800',
      alt: 'Signature country loaf',
    },
    href: '/breads/signature-country-loaf',
  },
}
