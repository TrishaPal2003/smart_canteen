"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-0 bg-background text-on-surface relative overflow-hidden">

      {/* CONTAINER */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-[2.5rem] overflow-hidden bg-surface-container-lowest shadow-2xl shadow-on-surface/5">

        {/* LEFT IMAGE SECTION */}
        <div className="hidden md:block relative overflow-hidden group">

          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAogojKMtAW1oRLxnhuBn8qY15YZNWaDr51JozV9MZibxch6m0sXCmR7UEdz3GU3BOJ4xNeGZbwEiVSIvHb6kfPJQ5kCnGqae7h9SGNIv57qSNC_9txIIeoKMc9UHz89FK3oq_k9ey09D6I95NeCfgG63mNtrOid6RpGCQty4GUfm1Vp-z9PEcv1YSB9oD9X3DENIQ4QnhXJp7eyzVjYzKzCCqjAJsEJZB1mSta6SQxgzQFMjAnWzuiPKnIr_EC9jN21XHW3E-yur6-"
            alt="Food"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-12">
            <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
              Fuel your productivity <br /> with every bite.
            </h2>
            <p className="text-white text-lg opacity-90 max-w-md">
              Smart dining for the modern workspace.
            </p>
          </div>

          {/* BRAND FLOAT */}
          <div className="absolute top-8 left-8 glass-panel px-6 py-3 rounded-full flex items-center gap-2">
            <FontAwesomeIcon
            icon={faUtensils}
            className="text-primary text-3xl"
            />
            <span className="font-black text-[#006944] text-xl">
              Culina Pulse
            </span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 bg-white">

          {/* MOBILE BRAND */}
          <div className="md:hidden flex items-center gap-2 mb-12">
            <span className="material-symbols-outlined text-primary text-3xl">
              <FontAwesomeIcon
              icon={faUtensils}
               className="text-primary text-3xl"
              />
            </span>
            <span className="font-black text-[#006944] text-2xl">
              Culina Pulse
            </span>
          </div>

          <div className="max-w-sm w-full mx-auto">

            {/* HEADER */}
            <header className="mb-10">
              <h1 className="text-3xl text-green-900 font-bold mb-2">Welcome Back</h1>
              <p className="text-on-surface-variant text-green-700">
                Please enter your details to access your account.
              </p>
            </header>

            {/* FORM */}
            <form className="space-y-6">

              {/* NAME */}
              <div>
                <label className="text-sm text-green-900 font-bold text-on-surface-variant ">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-surface-container-low rounded-xl px-4 py-4 focus:border-b-2 focus:border-primary outline-none bg-[#ccfded]"
                  />
                  <FontAwesomeIcon
                    icon={faUser}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant"
                    />
                </div>
              </div>

              {/* MOBILE */}
              <div>
                <label className="text-sm text-green-900 font-bold text-on-surface-variant">
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="+880 1XXX XXX XXX"
                    className="w-full bg-surface-container-low rounded-xl px-4 py-4 focus:border-b-2 focus:border-primary outline-none bg-[#ccfded]"
                  />
                  <FontAwesomeIcon
                icon={faMobileScreen}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant"
                />
                </div>
              </div>

              {/* OPTIONS */}
              <div className="flex justify-between items-center text-sm text-green-900">
                <label className="flex items-center gap-2 ">
                  <input type="checkbox" className="accent-primary " />
                  Remember Me
                </label>

                <a className="text-primary font-bold">Forgot Number?</a>
              </div>

              {/* BUTTON */}
              <button className="w-full py-4 bg-gradient-to-r from-[#006944] to-[#00A86B] text-white font-bold rounded-full shadow-lg hover:scale-[0.98] transition flex items-center justify-center gap-2">
                Continue
                <FontAwesomeIcon icon={faArrowRight} />
              </button>

            </form>

            {/* FOOTER */}
            <div className="mt-12 text-center space-y-6">
              {/* <p>
                Don’t have an account?{" "}
                <a className="text-secondary font-bold">
                  Register
                </a>
              </p> */}

              <p className="text-xs text-outline-variant text-green-800">
                By continuing, you agree to our{" "}
                <span className="underline">Privacy Policy</span> and{" "}
                <span className="underline">Terms</span>.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* BACKGROUND BLOBS */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-primary-container/30 rounded-full blur-3xl -z-10"></div>
      <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-tertiary-container/20 rounded-full blur-3xl -z-10"></div>

    </main>
  );
}