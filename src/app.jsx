import React, { useState, useEffect } from 'react'
import { keyCodeLookup } from './utils'

let keySound = new Audio(`./key_sounds/${'a'.toUpperCase()}.mp3`)

const Key = props => {
  const [pressed, setPressed] = useState(0)
  const { w, h, name } = props
  const [timer, setTimer] = useState(null)
  const [activeStyles, setActiveStyles] = useState({})

  const styles = w ? {
    fontFamily: 'Fira Code',
    width: w && w,
    height: h && h,
    margin: 2,
    // margin: 2,
    // border: '1px solid #000',
    boxShadow: '2px 2px 1px 0px #0003',
    border: '1px solid #fff3',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 10,
    transition: 'all .15s ease',
    textTransform: 'uppercase',
  } : {}

  useEffect(_ => {
    document.addEventListener("keydown", e => handlePress(e))
    document.addEventListener("keyup", e => handlePress(e, 'up'))
  }, [])
  
  const handlePress = (e, state='down') => {
    // console.log(id)
    if (name === keyCodeLookup[e.keyCode]) {
      if (state === 'down') {
        let keySound = new Audio(require(`./key_sounds/${name.toUpperCase()}.mp3`))
        if (keySound) keySound.play()
        setActiveStyles({
          boxShadow: '1px 1px 1px 0px #0003',
          background: 'linear-gradient(-45deg, #0000, #00000008)'
          // background: 'red'
        })
      } else {
        setTimeout(_ => {
          setActiveStyles({})
        }, 200)
      }
    }
  }


  const onClick = _ => {
  
  }

  return (
    <div style={{ ...styles, ...activeStyles  }} onClick={onClick}>
      {name}
    </div>
  )
}

const keys = {
  num: ['esc', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '<-----'],
  qwerty: ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|'],
  home: ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter'],
  bot: ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'], 
  mod: ['ctrl', 'alt', 'win', 'space', 'win', 'alt', 'fn', 'ctrl'],
}

const App = _ => {
  const ks = 50 // keysize
  const [last, setLast] = useState('_')

  const setLetter = letter => {
    setLast(letter)
  }

  const rowStyle = { display: 'flex', width: '100%' }

  return (
    <div style={{ paddingTop: 100, paddingLeft: 100 }}>
      {/* <audio src={require("./key_sounds/A.mp3")} controls autoPlay /> */}
      <div style={rowStyle}>
        {keys.num.map((key, i) => (
          <Key name={key} w={i===keys.num.length-1 ? ks*2 : ks} h={ks} />
        ))}
      </div>  

      <div style={rowStyle}>
        {keys.qwerty.map((key, i) => (
          <Key name={key} w={(i===0 || i===keys.qwerty.length-1) ? ks*1.5 : ks} h={ks} />
        ))}
      </div>

      <div style={rowStyle}>
        {keys.home.map((key, i) => (
          <Key name={key} w={i===0 ? ks*1.7 : i===keys.home.length-1 ? ks*2.33 : ks} h={ks} />
        ))}
      </div>

      <div style={rowStyle}>
        {keys.bot.map((key, i) => (
          <Key name={key} w={i===0 ? ks*2.1 : i===keys.bot.length-1 ? ks*2.97 : ks} h={ks} />
        ))}
      </div>
      <div style={rowStyle}>
        {keys.mod.map((key, i) =>  (
          <Key name={key} w={i===3 ? ks*6.845 : ks*1.2} h={ks} />
        ))}
      </div>
    </div>
  )
}

export default App
