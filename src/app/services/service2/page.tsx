import React from 'react'
import ServiceDetails from '../serviceDetails'
import { Metadata } from 'next';

const Service2Page = () => {
  return (
    <div>
    <ServiceDetails title={'خزانات الفيبر جلاس'} decription={'يتم صنع خزانات الفيبر جلاس من مادة الفيبر جلاس المسلح البولي استر المدهون بمادة الجيل كوت الملساء التي تتحمل عوامل الجو المختلفة بالإضافة إلى درجة الحرارة والرطوبة والأملاح والرياح كذلك التلوث'} image={'/serviceImg2.jpeg'}/>
    </div>
  )
}
export const metadata: Metadata = {
  title: " خزانات الفيبر جلاس - بلو تانك ",
  description: "معلومات عن خزانات الفيبر جلاس بلو تانك",
};
export default Service2Page