import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

interface IContextData {
  toogleTheme(): void
  theme: DefaultTheme
}

const AppContext = createContext({} as IContextData)

const AppProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem('@ThemeLightDark:theme');

    if (currentTheme) {
      return JSON.parse(currentTheme) as DefaultTheme
    }

    return light
  });


  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  useEffect(() => {
    localStorage.setItem('@ThemeLightDark:theme', JSON.stringify(theme))
  }, [theme])

  return (
    <AppContext.Provider value={{ toogleTheme, theme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}

function useApp() {
  const context = useContext(AppContext)
  
  return context
}

export { AppProvider, useApp }