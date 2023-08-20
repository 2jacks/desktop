import './App.css'
import { DesktopProvider } from './features/desktop/DesktopContext'

function App() {


  return (
    <DesktopProvider>
      <div></div>
    </DesktopProvider>
  )
}

export default App
