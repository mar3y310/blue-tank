import styles from "./Home.module.css";
import Link from "next/link";
import Head from "next/head";
import logo from "../../../../public/newWhiteLogo.png";
import aimLogo from "../../../../public/newBlueLogo-removebg-preview.png";
import questionImg from "../../../../public/quetion.jpg";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import Service from "./Service";
import "animate.css";
import CallUs from "../CallUs/CallUs";
import React from "react";
import Trust from "../Trust/Trust";

const Home = () => {
  return (
    <>
      <Head>
        <title>مصنع بلوتانك لصناعة خزانات عالية الجودة</title>
        <meta
          name="description"
          content="نحن في مصنع بلوتانك نعمل على تصنيع خزانات مياه ذات جودة عالية. تواصل معنا الآن لمزيد من المعلومات."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className={styles.home}>
        <section className={`${styles.header} `}>
          <div className={styles.headerContent}>
            <h1 className=" ">مصنع بلوتانك لصناعه خزانات عاليه الجوده</h1>
            <Link href="/contact" className={`${styles.headerContactBtn} `}>
              <button>تواصل معنا </button>{" "}
              {/* استخدام زر بدلاً من رابط مباشر لتحسين الوصولية */}
            </Link>
          </div>
        </section>

        {/* about */}

        <section className={styles.about}>
          <div className={`${styles.aboutLayOut}  `}>
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className={`${styles.aboutLogo} `}
            />
            <h2 className={``}>من نحن</h2>
            <h3 className={``}>
              بلو تانك شركة متخصصة في مجال صناعة خزانات المياه الأفقية والرأسية
              من خامات البولى ايثيلين المعالج غذائيا
            </h3>
          </div>
        </section>
        {/* aim */}
        <section className={`${styles.aims}`}>
          <div className={`container m-auto ${styles.aimContainer}`}>
            <div className={styles.rightAim}>
              <h2 className="">اهداف شركه بلو تانك</h2>
              <ul className="">
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>تقديم منتجات ذات جودة عالية وأداء ممتاز.</span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>
                    التفوق في مجال الإبتكار وتطوير حلول تخزين مستدامة.
                  </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>
                    بناء شراكات استراتيجية مع العملاء وتلبية توقعاتهم.
                  </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>تعزيز مساهمتنا في المسئولية الاجتماعية والبيئية.</span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>تقديم اسعار تنافسية للحصول على رضا العملاء.</span>
                </li>
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
                className=""
              />
            </div>
          </div>
        </section>
        {/* message */}
        <section className={styles.message}>
          <div className={styles.messageLayOut}>
            <h2 className="">رسالتنا</h2>
            <p className="">
              تسعى شركة بلو تانك الى تقديم حلول متقدمة وموثوقة في مجال تخزين
              المياة ، محورها الإبتكار والجودة ، نؤمن بأن المياة هى مورد حيوي ،
              ولذلك نعمل بجد لتوفير منتجاتنا الفريدة والتى تحافظ على الجودة
              والكفاء من خلال فريقنا الملتزم بالتميز والإبتكار ،نسعى لتلبية
              احتياجات عملائنا وتحاوز توقعاتهم . نحن نضع في اعتبارنا الاستدامة
              والبيئة في جميع جوانب عملنا، ونعمل على تحقيق تأثير ايجابى على
              المجتمعات التى نخدمها نحن نفتخر بتقديم منتجات تجمع بين الفعالية
              والابتكار ، ونطمح الى ان نكون الشريك المفضل لعملائنا عندما يتعلق
              الأمر بتخزين المياة. رسالتنا هى تحقيق التفوق والمساهمة في خلق
              مستقبل افضل للجميع
            </p>
            <Link href="/about" className={styles.messageBtn}>
              <button className=""> معرفه المزيد</button>
              {/* استخدام زر بدلاً من رابط مباشر لتحسين الوصولية */}
            </Link>
          </div>
        </section>
        {/* services */}
        <section className={styles.services}>
          <span className={styles.serviceHeading}>
            ما نقدمه في بلو تانك من خدمات
          </span>
          <div className={styles.servicesContainer}>
            <Service
              title="خزانات البولي إيثيلين"
              description={
                "توفر شركة  الوادي العديد من انواع خزانات المياه وتنكات المياه ومن ضمنها خزانات البولي ايثيلين وهو من أفضل الماركات في مصر حيث أن مادة البولي ايثيلين مصرح بها من قبل الاتحاد الأوروبي ومنظمة الغذاء الأمريكية الصحية والمركز القومي للبحوث"
              }
              dirctUrl={"/services/service1"}
              serviceImg={"/serviceoneNewImg.jfif"}
            />

            <Service
              serviceImg={"/serviceImg2.jpeg"}
              title="خزانات الفيبر جلاس
"
              dirctUrl={"/services/service2"}
              description={
                "يتم صنع خزانات الفيبر جلاس من مادة الفيبر جلاس المسلح البولي استر المدهون بمادة الجيل كوت الملساء التي تتحمل عوامل الجو المختلفة بالإضافة إلى درجة الحرارة والرطوبة والأملاح والرياح كذلك التلوث"
              }
            />

            <Service
              title="جميع منتجات الفيبر جلاس
"
              serviceImg={"/serviceImg3.jpeg"}
              description={
                "مثل (خزانات المياه – اكشاك الحراسة – ألعاب الأطفال – صناديق الدليفري  – الاكوا بارك   )"
              }
              dirctUrl={"/services/service3"}
            />
          </div>
        </section>
        {/* feature  */}
        <section className={`${styles.feature}   bg-white`}>
          <h1>ليه تختار خزانات بلو تانك</h1>
          <div className={`${styles.featureContainer} container m-auto`}>
            <div className={styles.left}>
              <ul className="">
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>تم تصنيعها من خامات البولى إيثلين عالى الكثافة</span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>معالحة ضد البكتيريا</span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>تتميز بالمرونة العالية والقدرة على مقاومة الصدمات</span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>
                    تم تصنيعها أليا كقطعة واحدة بدون فواصل لتجنب حدوث اى تسريب
                  </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>لا يتفاعل نهائيا مع الماء</span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>معالج ضد البكتيريا ويمنع تكوين الطحالب والفطريات</span>
                </li>
              </ul>
            </div>
            <div className={styles.featureImg}>
              <Image
                src={questionImg}
                alt="logo"
                width={300}
                height={300}
                quality={100} // تحسين الجودة
                layout="responsive"
              />
            </div>
            <div className={styles.right}>
              <ul>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>يعكس اشعة الشمس الضارة</span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>
                    مصنعة بأعلى جودة في السوق المصرى وبخامات مستوردة عالية
                    الجودة
                  </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>
                    يتكون من ثلاث طبقات من البولى إيثلين ليتمتع بمتانة عالية
                    وقدرة على مقاومة الصدمات
                  </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />
                  <span>
                    معتمد من وزارة الصحة والمركز القومى للبحوث ومصلحة الكيمياء
                  </span>
                </li>
                <li>
                  <AiOutlineCheck className={styles.aimIcon} />

                  <span>سهل النقل والتركيب</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* callus */}
        <CallUs />

        {/* trust */}
        <Trust />
      </div>
    </>
  );
};

export default Home;
