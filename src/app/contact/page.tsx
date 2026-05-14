import React from 'react'
import styles from './contact.module.css'
import contactImg from '../../../public/newBlueLogo-removebg-preview.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Image from 'next/image';
import { Metadata } from 'next';
import 'animate.css';

const ContactPage = () => {
  return (
    <div className={styles.contactConatiner}>
      <div className={styles.contactContent}>
        <div className={styles.contactHeading}>
<span className={styles.primaryColor}>ابق علي اتصال معانا</span>
<span>اتصل بنا الان</span>
        </div>
        <ul className="">
         
          <a href="tel:+201203764405" >
          <li>
         <div className={styles.IconBox}>
         <FaPhoneVolume size={20}  className={styles.contentIcon} />
         </div>
            <span>الهاتف 201203764405+</span>
          </li>
          </a>
          <li>
         <div className={styles.IconBox}>
         <FaLocationDot size={20}  className={styles.contentIcon} />
         </div>
            <span>طريق مصر إسكندرية الزراعي الكيلو 17 قليوب القليوبية</span>
          </li>
        </ul>
      </div>
      <div className={styles.contactImg}>
<Image src={contactImg} alt={'contactImg'} width={100} className="" height={100} quality={100} layout={'responsive'}/>
      </div>
    </div>
  )
}
export const metadata: Metadata = {
  title: " تواصل معنا - بلو تانك ",
  description: "تواصل مع شركه الوادي تانك",
};

export default ContactPage