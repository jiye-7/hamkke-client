import { FormEvent } from "react";
import Image from "next/image";

import Copyright from "@/components/copyright/Copyright";
import Header from "@/components/header/Header";
import Logo from "@/public/assets/hamkke_logo.png";
import FormFiled from "@/components/formField/FormField";

const LoginPage = () => {
  /**
   * 입력창
   *  - 이메일
   *  - 비밀번호
   *    !@#$%^&* 특수문자 중 1개 필수 사용,
   *    영어 대소문자 중 하나 사용,
   *    8자 이상
   */
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login 요청");
  };

  return (
    <div className="flex flex-col min-h-full justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src={Logo} alt="hamkke logo" className="mx-auto w-auto h-7" />
        <Header
          className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-800"
          text="Sign in to your account"
        />
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" onSubmit={handleLogin} className="space-y-6">
          <FormFiled
            id="email"
            label="Email"
            type="email"
            name="email"
            required
          />
          <FormFiled
            id="password"
            label="Password"
            type="password"
            name="password"
            required
          />
          <FormFiled
            id="password-confirm"
            label="Password Confirm"
            type="password"
            name="password-confirm"
            required
          />
          <div>
            <button
              type="submit"
              className="flex w-full justify-center bg-yellow-400 rounded-md px-3 py-2 text-sm font-semibold leading-6 text-white shadow-md hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 my-16"
            >
              Login
            </button>
          </div>
        </form>
        <Copyright />
      </div>
    </div>
  );
};

export default LoginPage;
