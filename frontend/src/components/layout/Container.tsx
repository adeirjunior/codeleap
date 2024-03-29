import Header from "../dom/Header";
import { ContainerProps } from "../../interfaces";
import React from "react";

export default function Container({ children }: ContainerProps) {
  return (
    <div className="m-auto">
      <Header />
      <main className="px-2 py-6 sm:px-6 bg-white w-full min-h-[90vh] dark:bg-federal-blue">
        {children}
      </main>
    </div>
  );
}
