// FontAwesome
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

// // or other themes
// import '@splidejs/react-splide/css/default';
// import '@splidejs/react-splide/css/sea-green';

// // or only core styles
// import '@splidejs/react-splide/css/core';
const options = {
     type         : 'loop',
     autoplay     : true,
     pauseOnHover : true,
     resetProgress: false,
   };

const HeroSection = () => {
  
 
  return (
    <div className='mt-14 pb-5 hidden lg:flex'> 
     <Splide  
     options={options}
     hasTrack={true}
     className="w-full box-border h-96 p-3 flex  bg-white relative"
     >
     
  <SplideSlide className='w-full bg-red-300'>
  <div 
       className="flex flex-col justify-center items-center  h-full rounded-md bg-gradient-to-r from-gray-300 to-slate-500  lg:text-lg">
        <h2 className='text-lg md:text-xl lg:text-2xl'>We Provide The Best Products</h2>
       </div>
  </SplideSlide>
  <SplideSlide>
  
  <div 
       className="flex flex-col justify-center items-center w-full h-full rounded-md bg-gradient-to-r from-gray-300 to-slate-500 ">
        <h2 className='text-lg md:text-xl lg:text-2xl'>Dedicated to our customers</h2>
       </div>
  </SplideSlide>
  <SplideSlide className='w-full bg-red-300'>
   
  <div 
       className="flex flex-col justify-center items-center w-full h-full rounded-md bg-gradient-to-r from-gray-300 to-slate-500 ">
        <h2 className='text-lg md:text-xl lg:text-2xl'>Fast & WorldWide Shipment</h2>
       </div>
  </SplideSlide>
  <SplideSlide>
   
  <div 
       className="flex flex-col justify-center items-center w-full h-full rounded-md bg-gradient-to-r from-gray-300 to-slate-500 ">
        <h2 className='text-lg md:text-xl lg:text-2xl'>We offer both wholesale & Retail sales</h2>
       </div>
 </SplideSlide>
  <SplideSlide>
   
  <div 
       className="flex flex-col justify-center items-center w-full h-full rounded-md bg-gradient-to-r from-gray-300 to-slate-500 ">
        <h2 className='text-lg md:text-xl lg:text-2xl'>Contact Us for a personalized requests</h2>
       </div>
 </SplideSlide>

</Splide>

    </div>
  );
};

export default HeroSection;

