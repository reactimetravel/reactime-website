import React from "react";

const posts = [
  {
    title: "Cheers to Reactime, Version 21!",
    href: "https://medium.com/@brok3turtl3/cheers-to-reactime-version-21-fa4dafa4bc74",
    category: {
      name: "React, Open Source, Developer Tools",
      href: "https://medium.com/tag/react",
    },
    description:
      "Reactime offers a range of features to make debugging React applications less complicated and more intuitive. This tool is a time-traveling debugger that gives developers the unique ability to take snapshots...",
    date: "August 09, 2023",
    datetime: "2023-08-09",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    readingTime: "4 min",
    author: {
      name: "Sean Kelly",
      href: "https://medium.com/@brok3turtl3",
      imageUrl: "https://i.imgur.com/68CnpzY.jpg",
    },
  },
  {
    title: "Reactime just keeps getting better",
    href: "https://medium.com/@njhuemmer/reactime-just-keeps-getting-better-b37659ff8b71",
    category: {
      name: "React, Debugging, Open Source",
      href: "https://medium.com/tag/react",
    },
    description:
      "Reactime is an open-source tool for debugging and time travel in React applications while in development. It is a Chrome Extension that allows developers to monitor, record, and conceptualize chan...",
    date: "June 21, 2023",
    datetime: "2023-06-21",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyNDYxNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    readingTime: "4 min",
    author: {
      name: "Nick Huemmer",
      href: "https://medium.com/@njhuemmer",
      imageUrl: "https://i.imgur.com/6bJiyk9.png",
    },
  },
  {
    title: "What time is it? It's still Reactime!",
    href: "https://medium.com/@minzo.kim/what-time-is-it-its-still-reactime-d496adfa908c",
    category: {
      name: "React, Open Source, Debugging ",
      href: "https://medium.com/tag/react",
    },
    description:
      "Reactime is a powerful open-source developer tool and Chrome extension designed for time travel and debugging in React applications, offering developers the ability to record, track, and visuali...",
    date: "May 17, 2023",
    datetime: "2023-05-17",
    imageUrl:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    readingTime: "4 min",
    author: {
      name: "Minzo Kim",
      href: "https://medium.com/@minzo.kim",
      imageUrl: "https://i.imgur.com/57j4S1x.png",
    },
  },
  {
    title: "Reactime 18.0 - Better Than Ever",
    href: "https://medium.com/@zdf2424/reactime-18-0-better-than-ever-148b81606257",
    category: {
      name: "React, Remix, Next.js",
      href: "https://medium.com/tag/react",
    },
    description:
      "Reactime is a Chrome extension and time-travel debugger for React that allows developers to record, track, and visualize state changes. Reactime leverages React’s core reconciliation algorithm... ",
    date: "Mar 28, 2023",
    datetime: "2023-3-28",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Zachary Freeman",
      href: "https://medium.com/@zdf2424",
      imageUrl: "https://avatars.githubusercontent.com/u/61289768?v=4",
    },
  },
];

export default function Blogs() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the Blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Read articles from previous releases!
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              data-testid="blog"
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-rose-500">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} data-testid="link" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
