import { App } from '@components/App'
import { AuthProvider } from '@contexts/auth'
import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './styles/GlobalStyles'

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
		<GlobalStyle />
	</React.StrictMode>,
	document.getElementById('root')
)
