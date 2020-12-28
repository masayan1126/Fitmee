import React, { useCallback, useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Works = () => {
  // const showForm = () => {
  //   const value = window.prompt();
  //   if (value == "zFeidjS937464") {
  //     window.location.pathname = "/gallery";
  //   }
  // };

  return (
    <section class="uc-bg-blue text-gray-700 body-font h-auto sm:h-auto sm:flex sm:items-center">
      <div class="container px-5 py-24 mx-auto flex flex-wrap" id="works">
        <div class="flex w-full mb-10 flex-wrap space-x-4 justify-between">
          <h1 class="sm:text-4xl text-4xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Gallery
          </h1>
          <div>
            <a id="show-form-link" href="/forms">
              すべて見る
            </a>
          </div>
          {/* <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            これまでの制作物です
          </p> */}
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/salon-lp.png"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/salon-lp.png"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src=""
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <a href="https://salon-lp.vercel.app/">
                <img
                  alt="gallery"
                  class="object-cover object-center block"
                  src="/salon-lp.png"
                />
              </a>
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/smartphonecaseshop.png"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/recette.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section class="uc-bg-blue text-gray-700 body-font h-screen" id="works">
    //   <div class="container mx-auto">
    //     <div class="flex flex-col text-center w-full mb-20">
    //       <h1 class="sm:text-4xl text-4xl font-medium title-font mb-4 text-gray-900">
    //         Works
    //       </h1>
    //       <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
    //         Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
    //       </p>
    //     </div>
    //     <div class="flex flex-wrap -m-4">
    //       <div class="lg:w-1/3 sm:w-1/2 p-4">
    //         <div class="flex relative">
    //           <img
    //             alt="gallery"
    //             class="absolute inset-0 w-full h-full object-cover object-center"
    //             src="/case-shop.png"
    //           />
    //           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //               THE SUBTITLE
    //             </h2>
    //             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //               Shooting Stars
    //             </h1>
    //             <p class="leading-relaxed">
    //               Photo booth fam kinfolk cold-pressed sriracha leggings
    //               jianbing microdosing tousled waistcoat.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="lg:w-1/3 sm:w-1/2 p-4">
    //         <div class="flex relative">
    //           <img
    //             alt="gallery"
    //             class="absolute inset-0 w-full h-full object-cover object-center"
    //             src="recette.png"
    //           />
    //           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //               THE SUBTITLE
    //             </h2>
    //             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //               The Catalyzer
    //             </h1>
    //             <p class="leading-relaxed">
    //               Photo booth fam kinfolk cold-pressed sriracha leggings
    //               jianbing microdosing tousled waistcoat.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="lg:w-1/3 sm:w-1/2 p-4">
    //         <div class="flex relative">
    //           <img
    //             alt="gallery"
    //             class="absolute inset-0 w-full h-full object-cover object-center"
    //             src="/My Fitness.JPEG"
    //           />
    //           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //               THE SUBTITLE
    //             </h2>
    //             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //               The 400 Blows
    //             </h1>
    //             <p class="leading-relaxed">
    //               Photo booth fam kinfolk cold-pressed sriracha leggings
    //               jianbing microdosing tousled waistcoat.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="lg:w-1/3 sm:w-1/2 p-4">
    //         <div class="flex relative">
    //           <img
    //             alt="gallery"
    //             class="absolute inset-0 w-full h-full object-cover object-center"
    //             src="https://dummyimage.com/602x362"
    //           />
    //           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //               THE SUBTITLE
    //             </h2>
    //             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //               Neptune
    //             </h1>
    //             <p class="leading-relaxed">
    //               Photo booth fam kinfolk cold-pressed sriracha leggings
    //               jianbing microdosing tousled waistcoat.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="lg:w-1/3 sm:w-1/2 p-4">
    //         <div class="flex relative">
    //           <img
    //             alt="gallery"
    //             class="absolute inset-0 w-full h-full object-cover object-center"
    //             src="https://dummyimage.com/605x365"
    //           />
    //           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //               THE SUBTITLE
    //             </h2>
    //             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //               Holden Caulfield
    //             </h1>
    //             <p class="leading-relaxed">
    //               Photo booth fam kinfolk cold-pressed sriracha leggings
    //               jianbing microdosing tousled waistcoat.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="lg:w-1/3 sm:w-1/2 p-4">
    //         <div class="flex relative">
    //           <img
    //             alt="gallery"
    //             class="absolute inset-0 w-full h-full object-cover object-center"
    //             src="https://dummyimage.com/606x366"
    //           />
    //           <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //             <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
    //               THE SUBTITLE
    //             </h2>
    //             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
    //               Alper Kamu
    //             </h1>
    //             <p class="leading-relaxed">
    //               Photo booth fam kinfolk cold-pressed sriracha leggings
    //               jianbing microdosing tousled waistcoat.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
export default Works;
