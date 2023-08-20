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
  isLocked,
  isCollapsed, // локал (но display: none) - полностью удалять ноду через onClise
  isExpanded,
  onDragStop,
  onResizeStop,
  onContainerClick,
  onClose
}) {
  const desktopCtx = useContext(desktopContext)

  const [position, setPosition] = useState({ x, y })
  const [size, setSize] = useState({ width, height })

  // Постараться сохранить события внутри, не таща наверх в Preset
  const _onDragStop = () => {}
  const _onResizeStop = () => {}
  const _onContainerClick = () => {}
  const _onExpandButtonClick = () => {}
  const _onCollapseButtonClick = () => {}

  return <div>{children}</div>
}
