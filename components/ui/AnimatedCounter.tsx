"use client";
import { formatAmount } from "@/lib/utils";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} prefix="$" decimal="." decimals={2} />
    </div>
  );
};

export default AnimatedCounter;
