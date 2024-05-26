import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import plumbingIcon from '../images/icons8-plumbing-50.png';
import emergencyIcon from '../images/icons8-emergency-50.png';
import drainIcon from '../images/icons8-pipe-50.png';
import sewerIcon from '../images/icons8-manhole-cover-50.png';

const BoxComponent = () => {
  const truncateDescription = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  const servicesData = [
    { title: 'Plumbing Repairs', description: 'Professional plumbing repair services for your home or business.', image: plumbingIcon },
    { title: 'Drain Cleaning', description: 'Efficient drain cleaning services to keep your pipes clear.', image: drainIcon },
    { title: 'Sewer Line Inspection', description: 'Comprehensive sewer line inspection services to identify and address potential issues.', image: sewerIcon },
    { title: 'Emergency Services', description: '24/7 emergency plumbing services for urgent situations.', image: emergencyIcon },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4, slidesToSlide: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className="custom-button-group">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition"
          onClick={previous}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition"
          onClick={next}
        >
          <FaChevronRight />
        </button>
      </div>
    );
  };

  return (
    <div className="BoxComponent mx-auto p-6 md:p-3 relative">
      <Carousel
        swipeable
        draggable
        responsive={responsive}
        ssr
        infinite
        keyBoardControl
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        autoPlay
        autoPlaySpeed={2000}
        partialVisbile={false}
        arrows={false} // Disable default arrows
        customButtonGroup={<CustomButtonGroup />} // Use custom button group
      >
        {servicesData.map((service, index) => (
          <div key={index} className="box p-6 text-center relative flex flex-col hover:bg-gray-100 shadow-md rounded-lg border border-solid border-gray-300 mx-2" style={{ minWidth: '200px', height: '400px' }}>
            <img className="mx-auto block m-8 w-16 h-16" src={service.image} alt={service.title} />
            <div className="title font-bold text-2xl mt-2 mb-2">{service.title}</div>
            <div className="description mt-auto flex-grow text-sm md:text-base text-gray-500">
              {truncateDescription(service.description, 100)}
            </div>
            <button className="mt-auto mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" style={{ maxWidth: '130px' }}>
              Learn More
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BoxComponent;
