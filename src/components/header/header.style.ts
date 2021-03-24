import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;

  h1 {
    flex: 1;
  }
`