import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('./images/loginCarousel/monitoring.png'), 
   caption:"Smart City Waste Monitoring",
   description:"AI & IoT Empowered system for monitoring and facilitating waste gathering and collection in real time"
  },
  {
    image:require('./images/loginCarousel/ill02.png'), 
    caption:"Automatically Scheduled Waste Collection",
    description:"Waste Levels are monitored and an automatic schedule for collection is made on time"
   },
   {
    image:require('./images/loginCarousel/ill03.png'), 
    caption:"Waste Gathering and Collection Analytics",
    description:"Collection activities are analyzed in real time to give location based insights"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption className="pt-[70px]">
          <h3 className="text-black">{slide.caption}</h3>
          <p className="text-black">{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;