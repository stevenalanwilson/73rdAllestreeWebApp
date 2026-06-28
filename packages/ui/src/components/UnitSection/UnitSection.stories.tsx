import type { Meta, StoryObj } from '@storybook/react'
import { SectionProvider } from '../../context/SectionProvider'
import { UnitSection } from './UnitSection'

const meta: Meta<typeof UnitSection> = {
  title: 'Components/UnitSection',
  component: UnitSection,
}
export default meta

export const RedSquirrels: StoryObj = {
  args: { id: 'red-squirrels' },
  decorators: [
    (Story) => (
      <SectionProvider section="squirrels" unit="red-squirrels">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const GreySquirrels: StoryObj = {
  args: { id: 'grey-squirrels' },
  decorators: [
    (Story) => (
      <SectionProvider section="squirrels" unit="grey-squirrels">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Mohawks: StoryObj = {
  args: { id: 'mohawks' },
  decorators: [
    (Story) => (
      <SectionProvider section="beavers" unit="mohawks">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Cherokees: StoryObj = {
  args: { id: 'cherokees' },
  decorators: [
    (Story) => (
      <SectionProvider section="beavers" unit="cherokees">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Lions: StoryObj = {
  args: { id: 'lions' },
  decorators: [
    (Story) => (
      <SectionProvider section="cubs" unit="lions">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Tigers: StoryObj = {
  args: { id: 'tigers' },
  decorators: [
    (Story) => (
      <SectionProvider section="cubs" unit="tigers">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Pumas: StoryObj = {
  args: { id: 'pumas' },
  decorators: [
    (Story) => (
      <SectionProvider section="scouts" unit="pumas">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Jaguars: StoryObj = {
  args: { id: 'jaguars' },
  decorators: [
    (Story) => (
      <SectionProvider section="scouts" unit="jaguars">
        <Story />
      </SectionProvider>
    ),
  ],
}
