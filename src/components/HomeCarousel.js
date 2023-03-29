import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { FaCircle } from "react-icons/fa";

const data = [
  {
    image: require('./images/loginCarousel/ill08.png'),
    caption: "Smart City Waste Monitoring",
    description: "AI & IoT Empowered system for monitoring and facilitating waste gathering and collection in real time",
    dot1: <FaCircle className="text-[#05C605]" />,
    dot2: <FaCircle className="text-[#cccccc]" />,
    dot3: <FaCircle className="text-[#cccccc]" />,
  },
  
  {
    image: require('./images/loginCarousel/ill02.png'),
    caption: "Automatically Scheduled Waste Collection",
    description: "Waste Levels are monitored and an automatic schedule for collection is made on time",
    dot1: <FaCircle className="text-[#cccccc]" />,
    dot2: <FaCircle className="text-[#05C605]" />,
    dot3: <FaCircle className="text-[#cccccc]" />,

  },
  {
    image: require('./images/loginCarousel/ill03.png'),
    caption: "Waste Gathering and  Collection Analytics",
    description: "Collection activities are analyzed in real time to give location based insights",
    dot1: <FaCircle className="text-[#cccccc]" />,
    dot2: <FaCircle className="text-[#cccccc]" />,
    dot3: <FaCircle className="text-[#05C605]" />,

  },
 
  {
    image: require('./images/loginCarousel/ill08.png'),
    caption: "Smart City Waste Monitoring",
    description: "AI & IoT Empowered system for monitoring and facilitating waste gathering and collection in real time",
    dot1: <FaCircle className="text-[#05C605]" />,
    dot2: <FaCircle className="text-[#cccccc]" />,
    dot3: <FaCircle className="text-[#cccccc]" />,
  },
  {
    image: require('./images/loginCarousel/ill02.png'),
    caption: "Automatically Scheduled Waste Collection",
    description: "Waste Levels are monitored and an automatic schedule for collection is made on time",
    dot1: <FaCircle className="text-[#cccccc]" />,
    dot2: <FaCircle className="text-[#05C605]" />,
    dot3: <FaCircle className="text-[#cccccc]" />,

  }, 
   {
    image: require('./images/loginCarousel/ill03.png'),
    caption: "Waste Gathering and  Collection Analytics",
    description: "Collection activities are analyzed in real time to give location based insights",
    dot1: <FaCircle className="text-[#cccccc]" />,
    dot2: <FaCircle className="text-[#cccccc]" />,
    dot3: <FaCircle className="text-[#05C605]" />,

  }

]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide,i) => {
          return (
            <Carousel.Item>
              <img
                className="w-[200px]"
                src={slide.image}
                alt="slider image"
              />
              <h3 className="text-black text-xl font-bold m-1">{slide.caption}</h3>
              <p className="text-gray-600">{slide.description}</p>
              <div className="flex pt-4 justify-center">
                <p className="text-[10px]">{slide.dot1}</p>
                <p className="pl-1 pr-1 text-[10px]">{slide.dot2}</p>
                <p className="text-[10px]">{slide.dot3}</p>
              </div>
            </Carousel.Item>

          )
        })}
        <div>
        </div>

      </Carousel>
    </div>
  );
}
export default HomeCarousel;