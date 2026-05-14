import React from 'react'
import ServiceDetails from '../serviceDetails'
import { Metadata } from 'next';

const Service3Page = () => {
  return (
    <div>
        
        <ServiceDetails title={'جميع منتجات الفيبر جلاس'} decription={'مثل (خزانات المياه – اكشاك الحراسة – ألعاب الأطفال – صناديق الدليفري – الاكوا بارك )'} image={'/serviceImg3.jpeg'}/>
    </div>
  )
}
export const metadata: Metadata = {
  title: " جميع منتجات الفيبر جلاس - بلو تانك ",
  description: "معلومات عن منتجات الفيبر جلاس بلو تانك",
};

export default Service3Page