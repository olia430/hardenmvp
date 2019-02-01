import React from 'react'
import { render } from 'react-dom'
import Index from './containers/app'
window.React = React
render(
	<Index />,
	document.getElementById("index")
)