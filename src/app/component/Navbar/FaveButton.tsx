'use client'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa6';
import styles from './Navbar.module.css'

const FaveButton = () => {
  return (
    <a
 href="https://www.facebook.com/profile.php?id=61557148696030" data-title="الفيسبوك" aria-label="الفيسبوك" target="_blank" rel="noopener noreferrer nofollow"
>
  <FaFacebookF className={styles.socialIcon} />
</a>

  )
}

export default FaveButton