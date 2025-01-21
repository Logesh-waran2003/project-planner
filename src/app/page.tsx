import Link from "next/link";
import React from "react";

const Page = () => {
  const links = [
    {
      href: "/kanban",
      text: "kanbanTry1",
    },
    {
      href: "/Projects",
      text: "Projects",
    },
    {
      href: "/Tasks",
      text: "Tasks",
    },
    {
      href: "/kanbanDND",
      text: "kanbanDND",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Links</h1>
      <div className="space-y-4 flex flex-col items-center">
        {/* <Link
          href="/kanban"
          className="text-blue-500 p-2 bg-blue-100 rounded hover:text-blue-700"
        >
          kanbanTry1
        </Link> */}
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-blue-500 p-2 bg-blue-100 rounded hover:text-blue-700"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
