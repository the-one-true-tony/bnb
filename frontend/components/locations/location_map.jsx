import React from 'react';

class LocationMap extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }
  render(){

    return(
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }

}

export default LocationMap;
