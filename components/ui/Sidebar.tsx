"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2 flex">
          <Image
            src="/icons/logo.svg"
            width={20}
            height={20}
            alt="logo"
            className="size-[24px] max-xl:size-12"
          />
          <h1 className="sidebar-logo">HormanyBank</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            currentPath === item.route ||
            currentPath.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="relative size-5">
                <Image
                  src={item.imgURL}
                  fill
                  alt={item.label}
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
            </Link>
          );
        })}
        User
      </nav>
      <footer>Footer</footer>
    </section>
  );
};

export default Sidebar;
