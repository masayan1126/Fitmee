import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
// import sneaker from "../public/sneaker.jpg";

const Form = () => {
  const pass = "zFeidjS937464";
  const [password, setPassword] = useState("");
  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const headers = {
    "Content-Type": "application/json",
    "any-header": "付加したいヘッダー",
  };

  const showForm = (event) => {
    event.preventDefault();
    if (password !== pass) {
      alert("パスワードが誤っています");
      return;
    }

    axios
      .post(
        `https://tailwind-components.vercel.app/gallery`,
        { pass },
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div class="min-h-screen flex flex-col items-center bg-gray-300">
      <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          認証画面
        </div>
        <div class="mt-10">
          <form onSubmit={(event) => showForm(event)}>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div class="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  value={password}
                  onChange={inputPassword}
                />
              </div>
            </div>
            <div class="flex w-full">
              <button
                type="submit"
                class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span class="mr-2 uppercase">完了</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
