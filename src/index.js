import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
// TODO: fix css order
import './global/styles/normalize.css'
import './global/styles/typography.css'
import './global/styles/general.css'
import './global/styles/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

render(<App/>, document.getElementById('root'))
