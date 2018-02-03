import React from 'react';

const Contacts = () => {
  const url = 'http://127.0.0.1:5000';

  fetch(`${url}/contacts`, {
      mode: 'no-cors',
      // credentials: 'include',
      method: 'GET',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then(response => response.json())
    .then(json => console.log(json, 'ee'))
    .catch(error => console.log('Authorization failed : ' + error.message));

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default Contacts;
