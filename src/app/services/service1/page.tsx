import React from 'react'
import ServiceDetails from '../serviceDetails'
import { Metadata } from 'next';
import TankCalculator from '@/app/component/TankCalculator/TankCalculator';

const service1 = () => {
  return (
    <div>
      <ServiceDetails title={'خزانات البولي إيثيلين'} decription={"توفر شركة بلو تانك العديد من انواع خزانات المياه وتنكات المياه ومن ضمنها خزانات البولي ايثيلين وهو من أفضل الماركات في مصر حيث أن مادة البولي ايثيلين مصرح بها من قبل الاتحاد الأوروبي ومنظمة الغذاء الأمريكية الصحية والمركز القومي للبحوث"} image={'/serviceoneNewImg.jpg'}/>
   <TankCalculator/>
    </div>
  )
}
export const metadata: Metadata = {
  title: " خزانات البولي ايثيلين - بلو تانك ",
  description: "معلومات عن خزانات البولي ايثيلين بلو تانك",
};

export default service1