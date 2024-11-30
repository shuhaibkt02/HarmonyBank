"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const currentPath = usePathname();

  return (
    <section className="w-full max-w[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={25}
            height={25}
            alt="menu"
            className="mr-1"
          />
        </SheetTrigger>
        <SheetContent side="left">
          <Link
            href="/"
            className="mb-12 cursor-pointer items-center gap-1 flex px-4"
          >
            <Image
              src="/icons/logo.svg"
              width={20}
              height={20}
              alt="logo"
              className="size-[24px] max-xl:size-12"
            />
            <h1 className="text-24 font-ibm-plex-serif font-bold text-black">
              HormanyBank
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-3 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    currentPath === item.route ||
                    currentPath.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          src={item.imgURL}
                          width={20}
                          height={20}
                          alt={item.label}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                User
              </nav>
                      </SheetClose>
                      footer
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
