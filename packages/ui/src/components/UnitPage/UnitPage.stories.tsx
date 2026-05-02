import type { Meta, StoryObj } from '@storybook/react'
import { SectionProvider } from '../../context/SectionProvider'
import { UnitPage } from './UnitPage'

const meta: Meta<typeof UnitPage> = {
  title: 'Components/UnitPage',
  component: UnitPage,
}
export default meta

export const RedSquirrels: StoryObj = {
  decorators: [
    (Story) => (
      <SectionProvider section="squirrels" unit="red-squirrels">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const GreySquirrels: StoryObj = {
  decorators: [
    (Story) => (
      <SectionProvider section="squirrels" unit="grey-squirrels">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Mohawks: StoryObj = {
  decorators: [
    (Story) => (
      <SectionProvider section="beavers" unit="mohawks">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Cherokees: StoryObj = {
  decorators: [
    (Story) => (
      <SectionProvider section="beavers" unit="cherokees">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Lions: StoryObj = {
  decorators: [
    (Story) => (
      <SectionProvider section="cubs" unit="lions">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Tigers: StoryObj = {
  decorators: [
    (Story) => (
      <SectionProvider section="cubs" unit="tigers">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Pumas: StoryObj = {
  decorators: [
    (Story) => (
      <SectionProvider section="scouts" unit="pumas">
        <Story />
      </SectionProvider>
    ),
  ],
}

export const Jaguars: StoryObj = {
  decorators: [
    (Story) => (
      <SectionProvider section="scouts" unit="jaguars">
        <Story />
      </SectionProvider>
    ),
  ],
}
