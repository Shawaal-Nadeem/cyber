'use client'
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const handleHamburgerClick = () => {
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");
      const links = document.querySelectorAll(".nav-links li");

      if (hamburger && navLinks && links) {
        // Animate Links
        navLinks.classList.toggle("open");
        links.forEach((link) => {
          link.classList.toggle("fade");
        });

        // Hamburger Animation
        hamburger.classList.toggle("toggle");
      }
    };

    const handleLinkClick = () => {
      const navLinks = document.querySelector(".nav-links");
      const links = document.querySelectorAll(".nav-links li");

      if (navLinks && links) {
        navLinks.classList.remove("open");
        links.forEach((link) => {
          link.classList.remove("fade");
        });
      }
    };

    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelectorAll(".nav-links li");

    if (hamburger) {
      hamburger.addEventListener("click", handleHamburgerClick);
    }

    if (links) {
      links.forEach((link) => {
        link.addEventListener("click", handleLinkClick);
      });
    }

    return () => {
      if (hamburger) {
        hamburger.removeEventListener("click", handleHamburgerClick);
      }

      if (links) {
        links.forEach((link) => {
          link.removeEventListener("click", handleLinkClick);
        });
      }
    };
  }, []);
  return (
    <div className="home">
       <header>
      <nav>
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="navbtn-home">
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" className="navbtn">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="navbtn">
              Hiring
            </a>
          </li>
          <li>
            <a href="#social" className="navbtn">
              Specialism
            </a>
          </li>
          <li>
            <a href="#about" className="navbtn">
              Jobs
            </a>
          </li>
          <li>
            <a href="#about" className="navbtn">
              Media Hub
            </a>
          </li>
          <li>
            <a href="#about" className="navbtn">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
<div className="flex justify-center">
  <img className="w-full -z-1 absolute" src='/assets/images/image.png'></img>
</div>
<div className=" relative mt-48 ml-8">
    <h1>SOC</h1>
    <h1 className=" -mt-4">ANALYSTS</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when</p>
  </div>
    </div>
  )
}
