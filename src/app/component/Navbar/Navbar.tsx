"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../../../public/newBlueLogo-removebg-preview.png";
import styles from "./Navbar.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { usePathname } from "next/navigation";
import FaveButton from "./FaveButton";

const Navbar = () => {
  const pathname = usePathname();
  const [showServices, setShowServices] = useState(false);
  const [open, setOpen] = useState(false); // لتحديد حالة الشريط الجانبي
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // عندما يفتح الشريط الجانبي، سيتم تعطيل التمرير
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // تنظيف الـ EventListener عند الخروج
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open, lastScrollY]);

  return (
    <div
      className={`bg-white fixed w-full transition-all duration-300 ease-in-out z-40 ${
        scrollingDown ? "top-[-123px]" : "top-0"
      }`}
    >
      <div
        className={`container m-auto gap-10 flex items-center justify-between p-4 h-[123px] ${styles.navbar}`}
      >
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>

        {/* sidebar */}
        <ul className={`${styles.fixed} ${open ? styles.open : null}`}>
          <div className={styles.sideContainer}>
            <ul className={`${styles.sidelinks}`}>
              <li className={`${styles.sidelink} ${pathname === "/" ? styles.activeSideLink : null}`}>
                <Link onClick={() => setOpen(false)} href={"/"}>الصفحة الرئيسية</Link>
              </li>
              <li className={`${styles.sidelink} ${pathname === "/about" ? styles.activeSideLink : null}`}>
                <Link onClick={() => setOpen(false)} href={"/about"}>عن الشركة</Link>
              </li>
              <li className={`${styles.sidelink} ${pathname.startsWith("/services")? styles.activeSideLink : null}  ${styles.services} ${showServices ? styles.open : null}`}>
                <span className="flex items-center gap-1">
                  <Link href={"/services"}>خدماتنا </Link>
                  <FaAngleDown
                    onClick={() => setShowServices((prev) => !prev)}
                    className={styles.openDropIcon}
                  />
                </span>

                {/* القائمة المنسدلة */}
                <ul className={`${styles.siddropdown} ${showServices ? styles.open : null}`}>
                  {showServices ? (
                    <>
                      <li className={`${pathname === "/services/service1" ? styles.activeSideLink : null}`}><Link onClick={() => setOpen(false)} href="/services/service1"> خزانات البولي إيثيلين
                      </Link></li>
                      <li className={`${pathname === "/services/service2" ? styles.activeSideLink : null}`}><Link onClick={() => setOpen(false)} href="/services/service2"> خزانات الفيبر جلاس
                      </Link></li>
                      <li className={`${pathname === "/services/service3" ? styles.activeSideLink : null}`}><Link onClick={() => setOpen(false)} href="/services/service3"> جميع منتجات الفيبر جلاس
                      </Link></li>
                    </>
                  ) : null}
                </ul>
              </li>
              {/* <li className={`${styles.sidelink} ${pathname === "/articles" ? styles.activeSideLink : null}`}>
                <Link onClick={() => setOpen(false)} href={"/articles"}>المقالات</Link>
              </li> */}
              <li onClick={() => setOpen(false)} className={`${styles.sidelink} ${pathname === "/contact" ? styles.activeSideLink : null}`}>
                <Link href={"/contact"}>تواصل معنا</Link>
              </li>
            </ul>

            {/* social icons */}
            <div className={styles.socialIconContainer}>
              <ul className={styles.socialIconList}>
                <li className={`${styles.socialIconItem} ${styles.faceboock}`}>
     
               <FaveButton/>

                </li>
               
                <li className={`${styles.socialIconItem} ${styles.whatsapp}`}>
                <a  href="https://wa.me/+201027565956" 
        target="_blank" 
        rel="noopener noreferrer">
                <FaWhatsapp className={styles.socialIcon} />

                </a>
                </li>
                <li className={`${styles.socialIconItem} ${styles.phone}`}>
<a  href="tel:+201203764405" >
<FaPhoneVolume className={styles.socialIcon} />

</a>
                </li>
              </ul>
              <span className={styles.sideBarFooter}>
                حقوق الطبع والنشر<pre>©</pre>
              </span>
            </div>
          </div>
        </ul>

        {/* nav */}
        <ul className={styles.links}>
          <li className={`${styles.link} ${pathname === "/" ? styles.active : null}`}><Link href={"/"}>الصفحة الرئيسية</Link></li>
          <li className={`${styles.link} ${pathname === "/about" ? styles.active : null}`}><Link href={"/about"}>عن الشركة</Link></li>
          <li className={`${styles.link} ${ pathname.startsWith("/services") || pathname === "/services/service1" ||  pathname === "/services/service2" ||  pathname === "/services/service3"? styles.active : null}`} onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
            <span className={``}><Link className="flex items-center gap-1" href={"/services"}>خدماتنا <FaAngleDown /></Link></span>
            {showServices && (
              <ul className={styles.dropdown} onMouseLeave={() => setShowServices(false)} onMouseEnter={() => setShowServices(true)}>
                <li className={` ${pathname === "/services/service1" ? styles.activeDrop : null}`}><Link href="/services/service1"> خزانات البولي إيثيلين
                </Link></li>
                <li className={` ${pathname === "/services/service2" ? styles.activeDrop : null}`}><Link href="/services/service2"> خزانات الفيبر جلاس
                </Link></li>
                <li className={` ${pathname === "/services/service3" ? styles.activeDrop : null}`}><Link href="/services/service3"> جميع منتجات الفيبر جلاس
                </Link></li>
              </ul>
            )}
          </li>
          {/* <li className={`${styles.link} ${pathname === "/articles" ? styles.active : null}`}><Link href={"/articles"}>المقالات</Link></li> */}
          <li className={`${styles.link} ${pathname === "/contact" ? styles.active : null}`}><Link href={"/contact"}>تواصل معنا</Link></li>
        </ul>

        {/* overlay */}
        {open ? <div className={`${styles.overlay}`} onClick={() => setOpen(false)}></div> : null}

        {/* closeIcon */}
        {open ? <div className={styles.closeIcon}><IoClose onClick={() => setOpen(false)} /></div> : null}

        <div className={styles.menuIcon}>
          <IoMdMenu onClick={() => setOpen(true)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
