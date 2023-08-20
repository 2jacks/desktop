import { useState } from 'react'

import { PresetsService } from '../../services/presests.service'

// А это мб Container или WinLayout, ...
export function Preset(name) {
  const [windowsData, setWindowsData] = useState(PresetsService.get(name))

  const placeWindowAtTop = () => {}

  const onWindowDragStop = () => {}
  const onWindowResizeStop = () => {}
  const onWindowContainerClick = () => {}
  const onWindowClose = () => {} // Закрывать изнутри через конктекст, добавлять коллбэк-проп
  const onWindowExpandButtonClick = () => {}
  const onWindowCollapseButtonClick = () => {}

  return <div></div>
}

