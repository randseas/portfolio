"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { type AppStore, createStore } from "@/lib/store";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = createStore();
  }
  return (
    <Provider store={storeRef.current}>{children}</Provider>
  );
}
