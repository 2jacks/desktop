import React from 'react'

export const desktopContext = React.createContext()

// Можно переименовать в GlobalDesktop и открывать окна в любом месте (типа портал)
export function DesktopProvider({ children }) {
	// Не факт, что надо для компонентов Desktop и Preset
	const createWindow = (content, position) => {

	}
	// OR AND
	const createGlobalWindow = () => {

	}


  return <desktopContext value={{}}>{children}</desktopContext>
}
