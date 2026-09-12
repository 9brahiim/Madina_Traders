"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useContext } from "react";

const MouseEnterContext = createContext(undefined);

export function CardContainer({ children, className, containerClassName }) {
  return (
    <MouseEnterContext.Provider value={[false, () => {}]}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
      >
        <div
          className={cn("relative flex items-center justify-center", className)}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({ children, className }) {
  return <div className={cn("h-full w-full", className)}>{children}</div>;
}

export function CardItem({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) {
  return (
    <Tag className={cn("w-fit", className)} {...rest}>
      {children}
    </Tag>
  );
}

export function useMouseEnter() {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a CardContainer");
  }
  return context;
}
