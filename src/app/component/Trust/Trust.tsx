

import trust1 from '../../../../public/trust1.jpeg'
import trust2 from '../../../../public/trust2.jpeg'
import trust3 from '../../../../public/trust3.jpeg'
import trust4 from '../../../../public/trust4.jpeg'
import trust5 from '../../../../public/trust5.jpeg'
import trust6 from '../../../../public/trust6.jpeg'
import trust7 from '../../../../public/trust7.jpeg'
import trust8 from '../../../../public/trust8.jpeg'
import styles from "./Trust.module.css";
import Image from 'next/image'

const Trust = () => {
  return (
    <section className={styles.trustedSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
        شركاؤنا الموثوقون في النجاح
              </h2>
        <p className={styles.description}>
        نحن نفخر بالعمل مع نخبة من الشركات والعلامات التجارية الرائدة في مجالات متنوعة، مما يعزز ثقة عملائنا ويعكس مدى التزامنا بالجودة والتميز.
        </p>
        <div className={styles.grid}>

  <div className={styles.partnerCard}>
    <Image
    src={trust1}
     alt={`شريك `}
     width={220}
     height={220}
     style={{ objectFit: "contain" }}
   />
 </div>
  <div className={styles.partnerCard}>
    <Image
    src={trust2}
     alt={`شريك `}
     width={220}
     height={220}
     style={{ objectFit: "contain" }}
   />
 </div>
  <div className={styles.partnerCard}>
    <Image
    src={trust3}
     alt={`شريك `}
     width={220}
     height={220}
     style={{ objectFit: "contain" }}
   />
 </div>
  <div className={styles.partnerCard}>
    <Image
    src={trust4}
     alt={`شريك `}
     width={220}
     height={220}
     style={{ objectFit: "contain" }}
   />
 </div>
  <div className={styles.partnerCard}>
    <Image
    src={trust5}
     alt={`شريك `}
     width={220}
     height={220}
     style={{ objectFit: "contain" }}
   />
 </div>
  <div className={styles.partnerCard}>
    <Image
    src={trust6}
     alt={`شريك `}
     width={220}
     height={220}
     style={{ objectFit: "contain" }}
   />
 </div>
  <div className={styles.partnerCard}>
    <Image
    src={trust7}
     alt={`شريك `}
     width={220}
     height={220}
     style={{ objectFit: "contain" }}
   />
 </div>
  <div className={styles.partnerCard}>
    <Image
    src={trust8}
     alt={`شريك `}
     width={220}
     height={220}
     style={{ objectFit: "contain" }}
   />
 </div>
 </div>

       
       
      
 
      
     
        </div>
    
    </section>
  )
}

export default Trust