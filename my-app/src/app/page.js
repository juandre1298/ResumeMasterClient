"use client";
import React from "react";
import CollapseController from "./components/CollapseController";
import ResumePreview from "./components/ResumePreview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex items-center justify-between p-6 gap-6 lg:flex-row flex-col">
      <CollapseController />
      <ResumePreview />
    </main>
  );
}
