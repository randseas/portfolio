"use client";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";
import nProgress from "nprogress";
import { useEffect } from "react";
import "nprogress/nprogress.css";

nProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
  minimum: 0.15,
  easing: "ease",
  speed: 300
});

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    nProgress.done();
  }, [pathname, searchParams]);
  return null;
}
