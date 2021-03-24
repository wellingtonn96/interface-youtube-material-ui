import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { useApp } from '../../hooks/App'
 
import { Container } from './header.style'

const Header: React.FC = () => {
  const { toogleTheme } = useApp()
  const { colors, title } = useContext(ThemeContext)
  
  return (
    <Container>
      <h1>Hello Header</h1>

      <Switch
        onChange={toogleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.5, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  )
}

export default Header