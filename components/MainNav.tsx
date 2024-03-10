"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="mx-auto flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link href={route.href} key={route.href} className="text-black">
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
