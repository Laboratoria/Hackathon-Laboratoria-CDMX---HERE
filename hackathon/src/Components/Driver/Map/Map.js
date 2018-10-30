import React, {Component} from 'react';
const url = 'https://image.maps.api.here.com/mia/1.6/mapview?c=19.4333%2C-99.1333&z=15&app_id=pTQHthTPqZVrdhncVtAH&app_code=ea1PHp17f0IUvVcWjIMyaA';

class MapHere extends Component {
  constructor () {
    super ();
    this.state = {
      Map : null
    }
  }

  componentWillMount () {
    fetch(url)
    .then((res) => res)
    .then(Map => this.setState({Map}))
    console.log(Map);
  }


  render () {
    if(this.state.Map){
      return (
        <div>
          <img src={this.state.Map.url} alt="Map"/>
        </div>
      )
    }else{
      return(
        <p>holi</p>
      )
    }
  }
}


export default MapHere;