import React, { useCallback, useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import WebIcon from "@material-ui/icons/Web";
import AppsIcon from "@material-ui/icons/Apps";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

const Service = () => {
  const classes = useStyles();

  return (
    <section class="text-gray-700 body-font h-auto md:h-screen sm:flex sm:items-center">
      <div class="container mx-auto py-24 px-5" id="service">
        <div class="text-center mb-20">
          <h1 class="title sm:text-4xl text-4xl font-medium title-font text-gray-900 mb-4">
            Service
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Webに特化したサービスを展開しています
          </p>
          {/* <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div> */}
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full uc-bg-blue text-white mb-5 flex-shrink-0">
              {/* <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg> */}
              <WebIcon fontSize="large" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                WEB制作
              </h2>
              <p class="leading-relaxed text-base px-8">
                ランディングページ、ホームページ、ECサイトなどのWEBサイト制作を承っております
              </p>
              {/* <a class="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full uc-bg-blue text-white mb-5 flex-shrink-0">
              <AppsIcon fontSize="large" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                WEBアプリ開発
              </h2>
              <p class="leading-relaxed text-base px-8">
                中小規模のWEBアプリケーションを承っております
              </p>
              {/* <a class="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full uc-bg-blue text-white mb-5 flex-shrink-0">
              <ColorLensIcon fontSize="large" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                WEBデザイン
              </h2>
              <p class="leading-relaxed text-base px-8">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
              {/* <a class="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
