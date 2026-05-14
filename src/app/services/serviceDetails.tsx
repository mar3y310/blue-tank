import React from 'react'
import styles from './Services.module.css'
import Image from 'next/image'
interface serviceProps{
    title:string,
    decription:string,
    image:string
}
const serviceDetails = ({title,decription,image}:serviceProps) => {
  return (
    <section className={`${styles.DetailsContainer} container m-auto`}>
        <div className={styles.detailsContent}>
            <h2>
{title}
            </h2>
            <p>
{decription}

            </p>

        </div>
        <div className={styles.detailsImg}>
        <Image
                src={image}
                alt="logo"
                width={300}
                height={300}
                quality={100} // تحسين الجودة
                layout="responsive"
           
              />
        </div>
    </section>
  )
}

export default serviceDetails