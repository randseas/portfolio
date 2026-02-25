"use client";
import nProgress from "nprogress";
import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();
    };
  }, []);

  return null;
}
