
"use client";
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);


    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // دالة الرجوع للأعلى
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

  return (
    <button
    onClick={scrollToTop}
    className={`fixed bottom-5 right-5 z-50 p-4  bg-blue-950 text-white shadow-lg hover:bg-blue-600 transition-all duration-300 ${
        isVisible ? 'block' : 'hidden'
    }`}
>
    <FaArrowUp size={18} />
</button>
  )
}

export default ScrollUp