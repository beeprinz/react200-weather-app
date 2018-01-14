import React from 'react';


export default class History extends React.Component {

renderHistory() {
    const { history } = this.props
    if (!history.length) { return null }
    return history.map(city => {
        return <a href="#" key={city.cityName} className="list-group-item list-group-item-action">{city.cityName}</a>
    })
}
    
render() {

    const{history} =this.props;
    console.log('history props', this.props)

    
    return (

        // <div className="card border-info">
        //       <h5 className="card-header bg-info text-white">
        //         Search History
        //       </h5>
        //       <div className="card-body">
        //       <div className="list-group">

        //       <a href="#" className="list-group-item list-group-item-action">{history.cityName}</a>
        //       {/* <a href="#" className="list-group-item list-group-item-action">{history[0].cityName}</a> */}
        //       <a href="#" className="list-group-item list-group-item-action">San Diego</a>
        //     </div>
        //       </div>
        //     </div>

    
        <div className="card border-info">
            <h5 className="card-header bg-info text-white">
            Search History
            </h5>
            <div className="card-body">
            <div className="list-group">
                {this.renderHistory()}
            </div>
        </div>
      </div>

    );
}
}