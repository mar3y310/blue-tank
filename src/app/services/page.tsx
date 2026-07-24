import React from 'react'
import styles from './Services.module.css'
import Service from '../component/Home/Service'

import AfterSell from './AfterSell'

import { Metadata } from 'next'
import TankCalculator from '../component/TankCalculator/TankCalculator'
import Tanksise from '../component/Tanksize/Tanksise'
const SevicesPage = () => {
  return (
    <section className={styles.services}>
          <span className={styles.serviceHeading}>
            ما نقدمه في بلو تانك من خدمات
          </span>
          <div className={styles.servicesContainer}>
         

            <Service title="خزانات البولي إيثيلين"
            description={"توفر شركة  بلو تانك العديد من انواع خزانات المياه وتنكات المياه ومن ضمنها خزانات البولي ايثيلين وهو من أفضل الماركات في مصر حيث أن مادة البولي ايثيلين مصرح بها من قبل الاتحاد الأوروبي ومنظمة الغذاء الأمريكية الصحية والمركز القومي للبحوث"} dirctUrl={"/services/service1"} serviceImg={"/serviceoneNewImg.jpg"} />
          

           
            <Service
            serviceImg={"/serviceImg2.jpeg"} 
              title="خزانات الفيبر جلاس
"dirctUrl={"/services/service2"}
              description={
                "يتم صنع خزانات الفيبر جلاس من مادة الفيبر جلاس المسلح البولي استر المدهون بمادة الجيل كوت الملساء التي تتحمل عوامل الجو المختلفة بالإضافة إلى درجة الحرارة والرطوبة والأملاح والرياح كذلك التلوث"
              }
            />
        
       
            <Service title="جميع منتجات الفيبر جلاس
"   serviceImg={"/serviceImg3.jpeg"}   description={"مثل (خزانات المياه – اكشاك الحراسة – ألعاب الأطفال – صناديق الدليفري  – الاكوا بارك   )"}  dirctUrl={"/services/service3"}/>
          </div>
            <TankCalculator/>
            <Tanksise/>
          <AfterSell/>
          
        
        </section>
  )
}
export const metadata: Metadata = {
  title: " خدامات    - بلو تانك ",
  description: "معلومات عن جميع منتجات   بلو تانك",
};

export default SevicesPage