import React from 'react';


export default class History extends React.Component {
    
render() {

    return (

        <div className="card border-info">
              <h5 className="card-header bg-info text-white">
                Search History
              </h5>
              <div className="card-body">
              <div className="list-group">
              {/* <a href="#" className="list-group-item list-group-item-action active">
                Cras justo odio
              </a> */}
              <a href="#" className="list-group-item list-group-item-action">San Bernardino</a>
              <a href="#" className="list-group-item list-group-item-action">San Diego</a>
            </div>
              </div>
            </div>

    );
}
}