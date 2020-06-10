import React, { Component } from 'react'
import Terminal from 'react-console-emulator'
import qs from 'qs'
import axios from 'axios'


const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: function () {
      return `${Array.from(arguments).join(' ')}`
    }
  },
  status: {
    description: 'Status of Server.',
    usage: 'status',
    fn: function () {
      axios({
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://rcon-express.herokuapp.com/',
        data: qs.stringify({
          host: '18.230.97.82',
          port: '27015',
          pass: 'SomosChoborra',
          command: 'status'
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
      .then((result) => {
        return result
      })
      .catch((err) => {
        return `error`
      })



    }
  }
}

export default class MyTerminal extends Component {
  render () {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to the React terminal!'}
        promptLabel={'me@React:~$'}
      />
    )
  }
}
