import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import qs from 'qs'
import axios from 'axios'
import './Console.css';

export default class Console extends Component {
  showMsg = () => 'Hello World'
  render() {
    return (
      <div>
        <Terminal
          color="white"
          backgroundColor="black"
          hideTopBar={true}
          allowTabs={false}
          startState="maximised"
          showActions={false}
          prompt='white'
          style={{ fontWeight: 'bold', fontSize: '1em', width: "100%" , height: "100vh" }}
          commands={{
            showmsg: this.showMsg
            

            
          }}
          commandPassThrough={(cmd, print) => {
            // do something async
            axios({
              method: 'post',
              url: 'https://cors-anywhere.herokuapp.com/https://rcon-express.herokuapp.com/',
              data: qs.stringify({
                host: 'your-host',
                port: 'your-ip',
                pass: 'your-pass',
                command: cmd.join(' ')
              }),
              headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
            })
            .then((result) => {
              print(result.data)
            })          
            .catch((err) => { print(err) })
            
          }}

          msg="Counter-Strike React Console"
        />
      </div>
    );
  }
}