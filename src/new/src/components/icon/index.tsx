/* THIS FILE IS AUTOGENERATED BY RUN `yarn cic`, YOU DON'T NEED EDIT IT */
import React from 'react'
import Clockwise from '../../../static/icons/clockwise.svg'
import Close from '../../../static/icons/close.svg'
import CloudUpload from '../../../static/icons/cloud-upload.svg'
import Configuration from '../../../static/icons/configuration.svg'
import Counterclockwise from '../../../static/icons/counterclockwise.svg'
import Duplicate from '../../../static/icons/duplicate.svg'
import MoodSad from '../../../static/icons/mood-sad.svg'

export type IconName =
  | 'clockwise'
  | 'close'
  | 'cloud-upload'
  | 'configuration'
  | 'counterclockwise'
  | 'duplicate'
  | 'mood-sad'

const iconsDict: { [key in IconName]: string } = {
  clockwise: Clockwise,
  close: Close,
  'cloud-upload': CloudUpload,
  configuration: Configuration,
  counterclockwise: Counterclockwise,
  duplicate: Duplicate,
  'mood-sad': MoodSad
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
}

export default function Icon({ name, ...props }: IconProps) {
return null
  // return React.createElement(iconsDict[name], props)
}
