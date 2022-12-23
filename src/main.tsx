import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './app/Router'
import { RoomContextProvider } from './contexts/RoomContext'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <RoomContextProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </RoomContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
