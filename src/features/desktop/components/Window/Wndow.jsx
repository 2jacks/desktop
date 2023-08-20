import { useContext, useState } from 'react'
import { desktopContext } from '../../DesktopContext'

export function Window({
  container,
  id,
  name, // глоб

  children,
  x,
  y,
  width,
  height,
  zIndex, // глоб
  isCollapsed,
  isExpanded,
  onDragStop,
  onResizeStop,
  onContainerClick
}) {
  const desktopCtx = useContext(desktopContext)

  const [position, setPosition] = useState({ x, y })
  const [size, setSize] = useState({ width, height })

  // Постараться сохранить события внутри, не таща наверх в Preset
  const _onDragStop = () => {}
  const _onResizeStop = () => {}
  const _onContainerClick = () => {}
  const _onClose = () => {} // Закрывать изнутри через конктекст, добавлять коллбэк-проп
  const _onExpandButtonClick = () => {}
  const _onCollapseButtonClick = () => {}

  return <div>{children}</div>
}
