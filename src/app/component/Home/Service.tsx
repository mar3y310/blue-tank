import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import Link from 'next/link';

interface ServiceProps {
  
    title: string;
    description: string;
    dirctUrl:string;
    serviceImg:string


}

const Service = ({title,description,dirctUrl,serviceImg}:ServiceProps) => {
    return (
        <div className={styles.service}>
            <div className={styles.serviceImg}>
                <Image
                    src={serviceImg}
                    alt='serviceImg'
                    width={100}
                    height={100}
                    quality={100}
                    layout="responsive"
                />
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link href={dirctUrl} >
                <button className={styles.serviceBtn}>معرفة المزيد</button>
            </Link>
        </div>
    );
};

export default Service;
