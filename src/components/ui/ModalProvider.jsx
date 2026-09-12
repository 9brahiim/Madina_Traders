"use client";

import React, { createContext, useContext, useState } from "react";
import EnquiryModal from "@/components/ui/EnquiryModal";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState("");

  return (
    <ModalContext.Provider
      value={{
        open,
        prefill,
        // Accepts an optional string to pre-fill the "Door Type Interest"
        // field (e.g. a door's PD number + name). Guarded with a typeof
        // check because existing call sites do `onClick={openModal}`,
        // which passes the click SyntheticEvent as the first argument —
        // without the guard that event object would land in the field.
        openModal: (interest) => {
          setPrefill(typeof interest === "string" ? interest : "");
          setOpen(true);
        },
        closeModal: () => setOpen(false),
      }}
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
