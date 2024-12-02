"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export const DynamicBreadcrumb = () => {
  const pathname = usePathname();
  const breadcrumbs = pathname.split("/").filter((crumb) => crumb !== "");
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb}>
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage className="capitalize">{crumb}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link
                    href={`/${breadcrumbs.slice(0, index + 1).join("/")}`}
                    className="hover:text-foreground cursor-pointer capitalize"
                  >
                    {crumb}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;