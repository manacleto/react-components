import React, { Component } from 'react';

// reactjs components are like javascript classes 
// with certain methods inside

class App extends Component {
  render() {


/*    return (
      <div className="App">
        <header className="App-header">
          <img src=# className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
*/

    //single line return
      //return <div>Hello World</div>

    //multi line return
    return (
      <div>
        Hello World
      </div>
    );

  }
}


/*
Returning two top-level nodes in a single component is not allowed and will produce an error:
  
        return (
      <div>
        Hello World
      </div>
      <div>
        Hello again!
      </div>
    );

JSX expressions must only have one parent element:

  return (
      <div>
        <div>
          Hello World
        </div>
        <div>
          Hello again!
        </div>
      </div>
    );
*/
export default App;
