import React, { useState, useEffect } from 'react'

const Div = props => {
  const [pressed, setPressed] = useState(0)
  const { children, w, h, bg, style } = props
  const [timer, setTimer] = useState(null)
  const [id, setId] = useState(null)

  const styles = w ? {
    fontFamily: 'Fira Code',
    width: w && w,
    height: h && h,
    border: '1px solid #eee',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .25s ease',
    textTransform: 'uppercase',
  } : {}

  const keyCodeLookup = {
      9: 'tab',
      81: 'q',
      87: 'w',
      69: 'e',
      82: 'r',
      84: 't',
      89: 'y',
      85: 'u',
      73: 'i',
      79: 'o',
      80: 'p',
      219: '[',
      221: ']',
      220: '|',

      20: 'caps',
      65: 'a',
      83: 's',
      68: 'd',
      70: 'f',
      71: 'g',
      72: 'h',
      74: 'j',
      75: 'k',
      76: 'l',
      186: ';',
      222: "'",
      13: 'enter',

      16: 'shift',
      90: 'z',
      88: 'x',
      67: 'c',
      86: 'v',
      66: 'b',
      78: 'n',
      77: 'm',
      188: ',',
      190: '.',
      191: '/',
      38: 'shift',

      17: 'ctrl',
      18: 'alt',
      91: 'win',
      32: 'space',
      93: 'win',
      37: 'alt',
      40:  'fn',
      39: 'ctrl',

      27: 'esc',
      49: '1',
      50: '2',
      51: '3',
      52: '4',
      53: '5',
      54: '6',
      55: '7',
      56: '8',
      57: '9',
      48: '0',
      189: '-',
      187: '+',
      8: '<-----'
  }
  
  const handlePress = e => {
    console.log(id)
    if (children === keyCodeLookup[e.keyCode] && id) {
      const keyDiv = document.querySelector(`#key-${id}`)
      console.log(keyDiv)
      if (keyDiv) {
        keyDiv.style.border = '1px solid #5b9'
        setTimeout(_ => {
          keyDiv.style.border = '1px solid #eee'
        }, 500)
      }
    }
  }
 
  useEffect(_ => {
    // setId((Math.floor(Math.random() * 9999)).toString())
    setId('megafaggot')
    // alert(id)
    document.addEventListener("keydown", e => handlePress(e))
  }, [])


  const onClick = _ => {
  }

  return (
    <div id={id} style={{ ...style, ...styles }} onClick={onClick}>
      {children}
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
  const ks = 50
  const [last, setLast] = useState('_')

  const setLetter = letter => {
    setLast(letter)
  }

  return (

    <Div>
      {/* <h1 style={{ textAlign: 'center', marginBottom: 100 , marginTop: 300 }}>{last}</h1> */}
      <h1 style={{ fontFamily: 'Fira Code', textAlign: 'center', marginBottom: 100 , marginTop: 300 }}>
        Maybe do something like: press all the keys that you usually press with your left middle finger: ...
        Then do that in stages for each finger
      </h1>
      <ul>
        Things to think about
        <li>How are you gonna clear the state of the key Div? Is it a common route to give the child a callback that changes the parent then render based on the new props?</li>
        <li>Need a way to package all that up, but it can just build up an array over time in the parent</li>
      </ul>
      <Div style={{ display: 'flex', marginLeft: 300 }}>
        {keys.num.map((key, i) => (
          <Div setLast={l => setLetter(l)} w={i===keys.num.length-1 ? ks*2 : ks} h={ks}>{key}</Div>
        ))}
      </Div>  

      <Div style={{ display: 'flex', marginLeft: 300 }}>
        {keys.qwerty.map((key, i) => (
          <Div setLast={l => setLetter(l)} w={(i===0 || i===keys.qwerty.length-1) ? ks*1.5 : ks} h={ks}>{key}</Div>
        ))}
      </Div>

      <Div style={{ display: 'flex', marginLeft: 300 }}>
        {keys.home.map((key, i) => (
          <Div setLast={l => setLetter(l)} w={i===0 ? ks*1.7 : i===keys.home.length-1 ? ks*2.33 : ks} h={ks}>{key}</Div>
        ))}
      </Div>

      <Div style={{ display: 'flex', marginLeft: 300 }}>
        {keys.bot.map((key, i) => (
          <Div setLast={l => setLetter(l)} w={i===0 ? ks*2.1 : i===keys.bot.length-1 ? ks*2.97 : ks} h={ks}>{key}</Div>
        ))}
      </Div>
      <Div style={{ display: 'flex', marginLeft: 300 }}>
        {keys.mod.map((key, i) =>  (
          <Div setLast={l => setLetter(l)} w={i===3 ? ks*6.845 : ks*1.2} h={ks}>{key}</Div>
        ))}
      </Div>
    </Div>
  )
}

export default App
