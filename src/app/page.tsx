import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Links</h1>
      <div className="space-y-4 flex flex-col items-center">
        <Link
          href="/kanban"
          className="text-blue-500 p-2 bg-blue-100 rounded hover:text-blue-700"
        >
          kanbanTry1
        </Link>
        <Link
          href="/Projects"
          className="p-2 bg-blue-100 rounded text-blue-500 hover:text-blue-700"
        >
          Projects
        </Link>
        <Link
          href="/Tasks"
          className="p-2 bg-blue-100 rounded text-blue-500 hover:text-blue-700"
        >
          Tasks
        </Link>
      </div>
    </div>
  );
};

export default Page;
