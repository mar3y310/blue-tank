import React from "react";
import styles from "../Home/Home.module.css";
import Image from "next/image";
import logo from '../../../../public/newBlueLogo-removebg-preview.png'

const CallUs = () => {
  return (
    <section className={styles.callSection}>
      <div className={`${styles.callContainer} container m-auto`}>
        <div className={styles.callright}>
          <div className={styles.callImg}>
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={150}
              quality={100} // تحسين الجودة
             
            />
          </div>
          <h2 >
            <span className="mx-2"> اتصل الأن</span>
            واحصل على الجوده التي تستحقها 
          </h2>
        </div>
        <a href="tel:+201203764405">اتصل بنا الأن</a>
      </div>
    </section>
  );
};

export default CallUs;
