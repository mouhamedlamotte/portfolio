"use client";
import React, { PropsWithChildren, Suspense } from "react";
import { AdminLayout } from "./components/admin-layout";
import { Loader } from "lucide-react";

export default function Layout(props: PropsWithChildren) {
  return (
        <AdminLayout>{props.children}</AdminLayout>
  );
}


