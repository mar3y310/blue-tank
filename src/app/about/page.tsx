import React from "react";
import styles from "./about.module.css";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import ServiceDetails from "../services/serviceDetails";
import CatalogButton from "./CatalogButton";
import Image from "next/image";
import logo from '../../../public/newWhiteLogo.png'
import AfterSell from "../services/AfterSell";
import { Metadata } from "next";
import 'animate.css';

const AboutPage = () => {
  return (
    <>
    <div className={`${styles.aboutCompany} container m-auto`}>
      <div className={`${styles.aboutAims}`}>
        <div className={`${styles.aboutAimLeft}`}>
          <span className={styles.topSpan}>بالنسبه لشركتنا</span>
          <span className={styles.bottomSpan}>كل شئ عن شركه  بلو تانك</span>
        </div>
        <div className={`${styles.aboutAimRight}`}>
          <p>
             بلو تانك شركة متخصصة في مجال صناعة خزانات المياه الأفقية والرأسية
            من خامات البولى إيثيلين المعالج غذائيا كما نقوم بتصنيع جميع منتجات
            الفبير جلا س مثل (خزانات المياه – اكشاك الحراسة – ألعاب الأطفال –
            صناديق الدليفري – الاكوا بارك )
          </p>
          <span className={styles.aboutAimRightSpan}>
            تهدف بلو تانك الى تحقيق الريادة في صناعة تخزين المياة من خلال:
          </span>
          <div className={styles.Lists}>
            <ul>
             
                <li>
                  <div className={styles.IconBox}>
                    <FaPhoneVolume size={20} className={styles.Icon} />
                  </div>
                  <span>
                  تقديم منتجات ذات جودة عالية وأداء ممتاز

                  </span>
                </li>
           
              <li>
                <div className={styles.IconBox}>
                  <FaLocationDot size={20} className={styles.Icon} />
                </div>
<span>
التفوق فب مجال الإبتكار وتطوير حلول تخزين مستدامة

</span>
              </li>
            </ul>
            <ul>
             
             <li>
               <div className={styles.IconBox}>
                 <FaPhoneVolume size={20} className={styles.Icon} />
               </div>
               <span>
               بناء شراكات استراتيجية مع ااعملاء وتلبية توقعاتهم

               </span>
             </li>
             <li>
               <div className={styles.IconBox}>
                 <FaPhoneVolume size={20} className={styles.Icon} />
               </div>
               <span>
               تعزيز مساهمتنا في المسئولية الاجتماعية والبيئية

               </span>
             </li>
        
           <li>
             <div className={styles.IconBox}>
               <FaLocationDot size={20} className={styles.Icon} />
             </div>
             <span>
             تقديم اسعار تنافسية للحصول على رضا العملائنا

             </span>
           </li>
         </ul>
          </div>
        </div>
      </div>
      <div className={`${styles.ourMassage}`}>
      <ServiceDetails title={"رسالتنا"} decription={"تسعى بلو تانك الى تقديم حلول متقدمة وموثوقة في مجال تخزين المياة ، محورها الإبتكار والجودة ، نؤمن بأن المياة هى مورد حيوي ، ولذلك نعمل بجد لتوفير منتجاتنا الفريدة والتى تحافظ على الجودة والكفاء من خلال فريقنا الملتزم بالتميز والإبتكار ،نسعى لتلبية احتياجات عملائنا وتحاوز توقعاتهم .  نحن نضع في اعتبارنا الاستدامة والبيئة في جميع جوانت عملنا، ونعمل على تحقيق تأثيى ايجابى على المجتمعات التى نخدمها نحن نفتخر بتقديم منتجات تجمع بين الفعالية والابتكار ، ونطمح الى ان نكون الشريك المفضل لعملائنا عندما يتعلق الأمر  بتخزين المياة.  رسالتنا هى تحقيق التفوق والمساهمة في خلق مستقبل افضل للجميع"} image={"/newHomeImg.jpg"}/>
                <CatalogButton/>

      </div>
    </div>
    <div className="callus">
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
    </div>
    <AfterSell/>

    </>
  );
};
export const metadata: Metadata = {
  title: "عن شركه - بلو تانك ",
  description: "معلومات عن شركه بلو تانك",
};

export default AboutPage;
