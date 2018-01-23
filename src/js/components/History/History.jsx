import React from 'react';


export default class History extends React.Component {

// renderHistory() {
//     const { history } = this.props
//     if (!history.length) { return null }
//     return history.map(city => {
//         return <a href="#" key={city.cityName} className="list-group-item list-group-item-action">{city.cityName}</a>
//     })
// }
//error: flatten children if you type in the same city more than once. child keys must be uniqe

renderHistory() {
    const { history } = this.props
    if (!history.length) { return null }
    return history.map((city, index) => {
        return <a href="#" key={index} className="list-group-item list-group-item-action">{city.cityName} <p className='small'>{city.dateCalendar} {city.dateHour}</p></a>
    })
}
    
render() {

    const{history} =this.props;
    console.log('history props', this.props)

    
    return (
    
        <div className="card border-primary">
            <h5 className="card-header bg-primary text-white">
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