import { SVGProps } from 'react'

export default interface IconsProps extends SVGProps<SVGSVGElement> {
  className?: string
  onClick?: () => void
}
