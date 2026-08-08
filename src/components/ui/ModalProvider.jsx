"use client";

import React, { createContext, useContext, useState } from "react";
import EnquiryModal from "@/components/ui/EnquiryModal";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}
    >
      {children}
      <EnquiryModal />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
