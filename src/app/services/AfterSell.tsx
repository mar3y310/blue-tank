import React from 'react'
import styles from './Services.module.css'
import { AiOutlineCheck } from 'react-icons/ai'
import Image from 'next/image'
import aimLogo from "../../../public/newBlueLogo-removebg-preview.png";

const AfterSell = () => {
  return (
    <section className={`${styles.aims}`}>
        <h2 className='text-center'>خدامات بعد البيع</h2>
          <div className={`container m-auto ${styles.aimContainer}`}>
          
            <div className={styles.rightAim}>
             
              <ul>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                 <span>
                 خدمة العملاء : توفير وسائل فعالة لدعم العملاء والرد على استفسارتهم وحل مشاكلهم

                 </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>
                  خدمات الأصلاح : توفير خدمات إصلاح سريعة وفعالة في حالة حدوث اى أضرار او مشاكل في الخزانات
                  </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>
                  التجديد والتحديث : عرض خدمات لتجديد وتحديث الخزانات القديمة لتحسين ادائها وزيادة عمرها التشغيلي
                  </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                 <span>
                 إعادة التدوير والأستبدال : تقديم خطط لأعادة تدوير الخزانات القديمة وإستبدالها بأخرى جديدة بأسعار مخفضة

                 </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
<span>
الاستشارات الفنية : تقديم استشارات فنية للعملاء حول افضل الطرق للحفاظ على خزانات المياة
</span>                </li>
              </ul>
            </div>
            <div className={styles.leftAim}>
              <Image
                src={aimLogo}
                alt="logo"
                width={100}
                height={100}
                quality={100} // تحسين الجودة
                layout="responsive"
              />
            </div>
          </div>
        </section>
  )
}

export default AfterSell