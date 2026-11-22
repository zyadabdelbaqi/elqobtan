"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const toggleSubmenu = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.innerWidth <= 992) {
      e.preventDefault();
      setIsSubmenuOpen((prev) => !prev);
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="logo"
          href="/"
          aria-label="القبطان لدق طلمبات المياة الجوفية — الرئيسية"
        >
          <Image
            src="/logo/logo.webp"
            alt="القبطان لدق طلمبات المياة الجوفية"
            width={120}
            height={80}
            priority
          />
        </Link>

        <nav
          className={`main-nav ${isNavOpen ? "open" : ""}`}
          id="main-nav"
          aria-label="القائمة الرئيسية"
        >
          <ul>
            <li className="menu-item">
              <Link className="menu-link" href="/" onClick={() => setIsNavOpen(false)}>
                الرئيسية
              </Link>
            </li>

            <li className={`menu-item has-children ${isSubmenuOpen ? "open" : ""}`}>
              <a
                className="menu-link"
                href="#services"
                onClick={toggleSubmenu}
              >
                خدمات دق الطلمبات
                <svg className="chev" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1.6 4.4h12.8L8 12.2z" />
                </svg>
              </a>
              <ul className="sub-panel">
                <li className="menu-item">
                  <a href="#services" onClick={() => setIsNavOpen(false)}>
                    دق طلمبات مياة جوفية
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#services" onClick={() => setIsNavOpen(false)}>
                    عمل بريمات ومجسات
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#services" onClick={() => setIsNavOpen(false)}>
                    مواسير بلاستيك وحديد
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#services" onClick={() => setIsNavOpen(false)}>
                    طلمبات المزارع والفلل والمنازل
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a className="menu-link" href="#method" onClick={() => setIsNavOpen(false)}>
                طريقة العمل
              </a>
            </li>

            <li className="menu-item">
              <a className="menu-link" href="#prices" onClick={() => setIsNavOpen(false)}>
                الأسعار
              </a>
            </li>

            <li className="menu-item">
              <a className="menu-link" href="#cities" onClick={() => setIsNavOpen(false)}>
                مناطق الخدمة
              </a>
            </li>

            <li className="menu-item">
              <a
                className="menu-link nav-call-link"
                href="tel:01204746971"
                onClick={() => setIsNavOpen(false)}
              >
                اتصل بنا: 01204746971
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-controls="main-nav"
          aria-label="القائمة"
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
