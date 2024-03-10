"use client";

import { formatter } from "@/lib/plugins/formatter";
import { useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="badge badge-accent">{formatter.format(Number(value))}</div>
  );
};

export default Currency;
