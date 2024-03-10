"use client";

import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMonted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMonted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      <button
        className="btn btn-secondary flex items-center"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span>{cart.items?.length}</span>
      </button>
    </div>
  );
};

export default NavbarActions;
