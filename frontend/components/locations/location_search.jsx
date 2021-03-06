import React from 'react';
import LocationIndexItem from './location_index_item';
import { asArray } from '../../reducers/selectors';
import Slider from 'react-slick';
class LocationSearch extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    let filter = this.props.filter;
    this.props.fetchAllLocations({filter});
  }

  render(){
    let {filter, locations} = this.props;
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    locations[filter] = locations[filter] || {};
    if(Object.keys(locations[filter]).length !== 0 && locations.constructor === Object){
      locations = asArray(locations[filter]);
      return(

        <secton className="inner-categories">
            {locations.map(local => (
              <LocationIndexItem
                key={local.id}
                local={local}
              />
            ))}
        </secton>
      );
    } else {
      return (
        <section className="categories">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </section>
      );
    }
  }
}

export default LocationSearch;
