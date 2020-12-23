import React, { useCallback, useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Contact = () => {
  return (
    <section class="text-gray-700 body-font h-auto sm:h-screen sm:flex sm:items-center">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -mb-10 text-center" id="contact">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-4xl font-medium title-font mb-4 text-gray-900">
              Contact
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              お問い合わせ
            </p>
          </div>
          <div class="w-full sm:w-1/2 mb-10 px-12 sm:px-10">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full mx-auto"
                src="/profile_image.jpg"
              />
            </div>
            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 sm:text-center">
              Masaya Nishigaki
            </h2>
            <p class="leading-relaxed text-center">
              大阪でWEBエンジニアをしています。WEB制作やアプリ開発が得意です。
              使用技術はPHP、Laravel、React、Vue、Next.js、Firebase、TailWindCss、
              Material-Uiなど。
            </p>
          </div>
          <div class="w-full sm:w-1/2 mb-10 px-12 sm:px-10">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full mx-auto"
                src=""
              />
            </div>
            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 sm:text-center">
              高田亜沙子
            </h2>
            <p class="leading-relaxed text-center">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
