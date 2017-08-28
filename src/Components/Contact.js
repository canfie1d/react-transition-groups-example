import React from 'react';

export default class Landing extends React.Component {
  render() {
    return (
      <main className='content'>
        <h1>Contact</h1>
        <form>
          <label htmlFor='name-input'>What is your name?</label>
          <input id='name-input' />
          <label htmlFor='key-input'>Name one major key</label>
          <input id='key-input' />
          <label htmlFor='real-input'>How do you keep it real?</label>
          <input id='real-input' />
          <label htmlFor='another-input'>Another One</label>
          <input id='another-input' />
        </form>
      </main>
    );
  }
}
