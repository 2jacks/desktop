import { useContext, useState } from 'react'
import { desktopContext } from '../DesktopContext'

import {Preset} from '../Preset/Preset'

import { PresetsService } from '../../services/presests.service'

// Возможно это Page
export function Desktop() {
  const desktopCtx = useContext(desktopContext)

  const [presetsList, setPresetsList] = useState(() => PresetsService.getList())
  const [currentPreset, setCurrentPreset] = useState('default')

  return <div></div>
}

