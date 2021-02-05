import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({page:'', links: []})

  const openSideBar = () => {
    setIsSideBarOpen(true)
  }
  const closeSideBar = () => {
    setIsSideBarOpen(false)
  }

  const openSubMenu = (text, coordinates) => {
   const newPage = sublinks.find((link) => link.page === text)
   setPage(newPage)
   setLocation(coordinates)
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
        location,
        page
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
