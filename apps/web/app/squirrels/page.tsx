import { getSectionConfig } from '@73rd/tokens'
import { SectionPage } from '@/components/SectionPage'

export default function SquirrelsPage() {
  return <SectionPage config={getSectionConfig('squirrels')} />
}
