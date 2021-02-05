import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true)

  const openSideBar = () => {
    setIsSideBarOpen(true)
  }
  const closeSideBar = () => {
    setIsSideBarOpen(false)
  }

  const openSubMenu = () => {
    setIsSubMenuOpen(true)
  }
  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        isSideBarOpen,
        openSubMenu,
        openSideBar,
        closeSubMenu,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//customhook

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
