
import Image from 'next/image';


const Footer = () => {


  return (
    <footer className="w-full h-[500px] bg-blue-950 text-blue-100 pt-12 text-center flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* الصورة */}
        <div className="w-48 h-48 ">
          <Image 
            src="/newWhiteLogo.png" 
            alt="Footer Logo" 
            width={200} 
            height={200} 
            quality={100}
          />
        </div>

        {/* النص تحت الصورة */}
       
        <p className="text-lg max-w-lg leading-relaxed mb-8 ">
          مرحبًا بكم في موقعنا! نحن ملتزمون بتقديم أفضل الخدمات لعملائنا.
        </p>
  
      
      </div>

      {/* نص الكوبي رايت مع خلفية داكنة */}
      <div className="bg-white text-black py-4 px-4 text-lg ">
        Copyright 2025 All Rights Reserved. © Designed By Blue Tank
      </div>
    </footer>
  );
};

export default Footer;
