import { ChevronRightIcon, StarIcon } from "@heroicons/react/20/solid";
import { string } from "prop-types";
import TeamSection from "../components/TeamSection";
import FeaturesSection from "../components/FeaturesSection";
// import Image from 'next/image';
import Blogs from "./Blogs";
import { useState } from "react";
import { trpc } from "../../utils/trpc";
import GifFeatures from "./GifFeatures";
import React from "react";

export default function LandingPage() {
  // This code is for the newsletter feature, which isn't set up yet.
  // The previous team mentioned possibly using prisma to do so.

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const { mutate } = trpc.user.createUser.useMutation();

  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.preventDefault();
  //   // grab the information of name and email
  //   // bundle those together to be an object to be sent to backend
  //   mutate({ name, email });
  //   setName("");
  //   setEmail("");
  // };

  return (
    <>
      <div className="bg-gray-50">
        <main>
          {/*  Hero section  */}
          <div className="flex">
            <div className="m-auto justify-center overflow-hidden lg:relative lg:py-40">
              <div className="m-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:mx-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                <div>
                  <div className="mt-8">
                    <div>
                      <a
                        target="_blank"
                        href="https://medium.com/@njhuemmer/reactime-just-keeps-getting-better-b37659ff8b71"
                        className="inline-flex space-x-4"
                      >
                        {/* <span className="rounded px-2.5 py-1 text-sm font-semibold text-rose-500">
                          What's new
                        </span> */}
                        <span className="inline-flex items-center space-x-1 text-sm font-medium text-rose-500">
                          <span>What's new in Reactime 21.0!</span>
                          <ChevronRightIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </div>
                    <div className="mt-6 sm:max-w-xl">
                      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Reactime: a time travel debugger for modern React
                        applications
                      </h1>
                      <p className="mt-6 text-xl text-gray-500">
                        A Chrome Extension that lets you rewind time and replay
                        previous versions of your stateful React components.
                      </p>
                      {/* This code is for the newsletter */}
                      {/* <p className="className=mt-6 mt-10 text-xl text-gray-500">
                        Sign up for our newsletter!
                      </p> */}
                    </div>
                    {/* <form
                      action="#"
                      className="mt-3 sm:flex sm:w-full sm:max-w-lg"
                    >
                      <div className="min-w-0 flex-1">
                        <label htmlFor="name" className="sr-only">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="mb-2 block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                          placeholder="Enter your name"
                          required
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <label htmlFor="hero-email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="hero-email"
                          type="email"
                          className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                          placeholder="Enter your email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="mt-8 block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
                          onClick={(e) => handleSubmit(e)}
                        >
                          Notify me
                        </button>
                      </div>
                    </form> */}
                    <div className="mt-6">
                      <div className="inline-flex items-center">
                        <div className="flex flex-shrink-0">
                          {/* <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" /> */}
                        </div>
                        <div className="inline min-w-0 py-1 text-sm text-gray-500 sm:py-3">
                          <StarIcon
                            className="mb-1 mr-2 inline h-5 w-5 text-yellow-400"
                            aria-hidden="true"
                          />
                          <span className="font-medium text-gray-900">
                            {" "}
                            Starred on GitHub
                          </span>{" "}
                          by over{" "}
                          <span className="font-medium text-rose-500">
                            1,900 users
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <div className="hidden sm:block">
                    {/* <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" /> */}
                    <svg
                      className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                      width={404}
                      height={392}
                      fill="none"
                      viewBox="0 0 404 392"
                    >
                      <defs>
                        <pattern
                          id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-200"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={392}
                        fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                      />
                    </svg>
                  </div>
                  {/*lg:h-full lg:max-w-none*/}
                  <div className="relative px-3 sm:mx-auto sm:max-w-3xl sm:px-10 lg:max-w-none lg:pl-12 lg:pr-3">
                    <img
                      //* lg:h-full w-full
                      className="rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:w-auto"
                      src="/v20/website-top-pic.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-16">
            <FeaturesSection />
            {/* <Features /> */}
            <GifFeatures />
            <Blogs />
            <TeamSection />
          </div>
        </main>
        {/* Footer section */}
        <footer className="gray-900 mt-8 bg-[#333333] sm:mt-8">
          <div className="mx-auto max-w-md overflow-hidden py-3 px-4 pb-10 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="mt-8 text-center text-base text-gray-400">
              &copy; 2023 Reactime, All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
