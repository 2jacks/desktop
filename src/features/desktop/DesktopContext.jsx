import React from 'react'

export const desktopContext = React.createContext()

// Можно переименовать в GlobalDesktop и открывать окна в любом месте (типа портал)
export function DesktopProvider({ children }) {
	const createWindow = (content, position) => {

	}


  return <desktopContext value={{}}>{children}</desktopContext>
}