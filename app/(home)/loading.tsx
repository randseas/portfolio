"use client";
import nProgress from "nprogress";
import { useEffect } from "react";

export default function Loading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();
    };
  }, []);
  return children;
}