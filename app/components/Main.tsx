"use client";
import React from "react";

type MainProps = {
  children?: React.ReactNode;
};
export function Main(props: MainProps) {
  return (
    <main className="flex-grow bg-background text-white p-4">
      {props.children}
    </main>
  );
}
