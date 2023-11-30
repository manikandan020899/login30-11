
import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css'
import 'semantic-ui-css/semantic.min.css';
import sp from '../src/assets/pngwing.com.png'


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  
  render() {
    
    const sp1 =   alert('ssss');
    // const SuccessNotify = () => toast.success('Successfully toasted!')
  return(

      <div className = "auth-background ui center aligned middle aligned grid" >

      <div class="ui card column auth-form">
        <div class="content">
          <div class="header center aligned">Welcome IBMS</div>
          <img className='py-4' src={sp} width={150} height={150}>
          </img>
          <div class="description">
            <form class="ui form">
              <div class="field left aligned">
                <div class="ui fluid input">
                  <input
                    type="text"
                    aria-invalid="true"
                    placeholder="User name"
                  />
                </div>

              </div>
              <div class="field">
                <div class="ui center corner labeled input">
                  <div class="ui label label right corner">
                    <i aria-hidden="true" class="asterisk icon"></i>
                  </div>
                  <input type="text" placeholder="password" />
                </div>
              </div>

              <button class="ui button primary" onClick={sp1}>Login</button>
              
            </form>
          </div>
        </div>
          
        </div >
       
      </div >
    );
  }
}

render(<App />, document.getElementById('root'));
