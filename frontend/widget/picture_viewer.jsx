import React from 'react';
import Slider from 'react-slick';

class PictureViewer extends React.Component {
  constructor(){
    super();
  }

  render(){
    const {pictures, options, klass} = this.props;
    const settings =  options || {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    if(pictures && pictures.length > 0){
      return (
        <div className={klass}>
          <Slider {...settings}>
            {pictures.map(picture => (
              <img
                key={picture.id}
                alt={picture.name || "Location"}
                src={picture.url}/>
            ))}
          </Slider>
        </div>
      );
    } else {
      return (
        <div>
          <img alt="Location" src={"https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495563515/home_onquwb.png"} />
        </div>
      );
    }
  }
}


export default PictureViewer;
