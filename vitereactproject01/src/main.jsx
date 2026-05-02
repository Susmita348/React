import React from 'react'
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import App from './App.jsx'


//  const reactElement={
//   type:'a',
//   props:{
//     href:'https://www.google.com',
//     target:'_blank',

//   },
//     children:'Google'
//  }
const anotherReactElement=(
  <a href='https://www.google.com' target='_blank'>visit me to Google</a>     

)
const username='Chaitanyakaka'
const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
   
  },
 'click me to visit google',
 username
)
const root =createRoot(document.getElementById('root'))
root.render(
  reactElement

)