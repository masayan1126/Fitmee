import React, { useCallback, useState, useEffect } from "react";

const Top = () => {
  return (
    <section class="uc-bg-blue text-gray-700 body-font h-screen flex items-center sm:items-center">
      <div
        class="py-24 px-5 uc-fadein container mx-auto flex md:flex-row flex-col items-center"
        id="top"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/top.png"
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <br class="hidden lg:inline-block" />
            高品質なWEBプロダクトをお届け。
          </h1>
          <p class="mb-8 leading-relaxed">
            現役のWEBエンジニアとデザイナーがお客様のアイデアをWEBサービスとして提供します。デザイン・コーディング双方の領域において、より高品質かつ専門性の高いプロダクトを作成する事が可能です。
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white uc-bg-orange border-0 py-4 px-6 focus:outline-none hover:bg-red-700 rounded text-xl">
              問い合わせする
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Top;
