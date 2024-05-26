import React from 'react';

function AboutUs() {
  return (
    <>
      <div className='w-full md:w-3/4 mx-auto p-6 sm:p-20'>
        <h1 className='text-3xl sm:text-5xl text-left'>About Us</h1>
        <h3 className='text-base sm:text-xl text-left mt-4'>Learn more about our company and team.</h3>
        <p className='mt-4'>
          At Aria Plumbing, we have been providing top-quality plumbing services in Toronto for over 20 years.
          Our team of experienced and certified plumbers is dedicated to offering reliable and efficient solutions for both
          residential and commercial clients.
        </p>
        <h2 className='text-2xl sm:text-3xl mt-6'>Our Mission</h2>
        <p className='mt-4'>
          Our mission is to deliver exceptional plumbing services that exceed our customers' expectations. We strive to be the
          trusted plumbing partner for our community by providing honest, professional, and affordable services.
        </p>
        <h2 className='text-2xl sm:text-3xl mt-6'>Our Values</h2>
        <ul className='list-disc mt-4 ml-6'>
          <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
          <li>Customer Focus: We value our customers and strive to provide excellent customer service.</li>
          <li>Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
          <li>Teamwork: We work together to meet the needs of our customers and help the company win.</li>
        </ul>
        <h2 className='text-2xl sm:text-3xl mt-6'>Our Team</h2>
        <p className='mt-4'>
          Our team is composed of highly skilled professionals who are passionate about plumbing. We are committed to continuous
          training and development to stay up-to-date with the latest industry standards and technologies.
        </p>
        <h2 className='text-2xl sm:text-3xl mt-6'>Contact Us</h2>
        <p className='mt-4'>
          If you have any questions or need plumbing services, feel free to contact us. We are here to help!
        </p>
        <p className='mt-4'>
          <strong>Phone:</strong> 123-456-7890<br />
          <strong>Email:</strong> contact@yourplumbingcompany.com<br />
          <strong>Address:</strong> 123 Main St, Toronto, ON M1M 1M1
        </p>
      </div>
    </>
  );
}

export default AboutUs;
