
"use client";
import React from 'react'
import styles from './about.module.css'
const CatalogButton = () => {
    const handleOpenCatalogPdf = () => {
        window.open('/newCatalog.pdf', '_blank');
    };
    const handleOpenDependPdf = () => {
        window.open('/dependant.pdf', '_blank');
    };
  return (
<div className={styles.buttonContainer}>
<button
            onClick={handleOpenCatalogPdf}
            className={styles.btn}

        >
افتح الكتالوج لمزيد من المعلومات
        </button>
        <button
            onClick={handleOpenDependPdf}
            className={styles.btn}

        >
            الأعتمادات
        </button>
</div>
  )
}

export default CatalogButton