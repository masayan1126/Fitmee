import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Top from "./top";
import Service from "./service";
import Works from "./works";
import Contact from "./contact";
import Footer from "./footer";
// import $ from "jquery";

export default function Home() {
  if (process.browser) {
    window.onscroll = () => {
      const serviceSectionHeight = document.getElementById("service");
      const worksSectionHeight = document.getElementById("works");
      const contactSectionHeight = document.getElementById("contact");
      if (
        window.pageYOffset > serviceSectionHeight.getBoundingClientRect().top
      ) {
        serviceSectionHeight.classList.add("uc-fadein");
      }

      if (window.pageYOffset > worksSectionHeight.getBoundingClientRect().top) {
        worksSectionHeight.classList.add("uc-fadein");
      }

      if (
        window.pageYOffset > contactSectionHeight.getBoundingClientRect().top
      ) {
        contactSectionHeight.classList.add("uc-fadein");
      }
    };
  }

  if (process.browser) {
    const vh = window.innerHeight;
    const calcHeight = () => {
      document.getElementById("__next").style.height = vh + "px";
      console.log(vh);
    };
    useEffect(() => {
      calcHeight();
    }, [window.addEventListener("resize", calcHeight)]);
    // window.addEventListener("resize", calcHeight)
  }

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main>
        <Top />
        <Service />
        <Works />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
