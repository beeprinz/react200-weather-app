import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
      <h1 className="title is-1">Cool Weather App</h1>
      
      <i className="mdi mdi-bell"></i> 

      <div className='columns'>
      <div className='column'>
      <div className="card">
  <div className="card-content">
    <p className="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p className="subtitle">
      Jeff Atwood
    </p>
  </div>
  {/* <footer className="card-footer">
    <p className="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p className="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer> */}
</div>
</div>

<div className='column'>
<div className="card">
<header className="card-header">
    <p className="card-header-title">
      Component
    </p>
</header>
  <div className="card-content">
    <p className="title">
      “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
    </p>
    <p className="subtitle">
      Jeff Atwood
    </p>
  </div>
  {/* <footer className="card-footer">
    <p className="card-footer-item">
      <span>
        View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
      </span>
    </p>
    <p className="card-footer-item">
      <span>
        Share on <a href="#">Facebook</a>
      </span>
    </p>
  </footer> */}
</div>      
</div>
</div> 


      </div>
    );
  }
}
