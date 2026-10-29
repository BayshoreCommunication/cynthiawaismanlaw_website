"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ConsultationModal from "./ConsultationModal";

interface ConsultationModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ConsultationModalContext = createContext<ConsultationModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ConsultationModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    // 1. Support custom event: window.dispatchEvent(new CustomEvent("open-consultation-modal"))
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener("open-consultation-modal", handleOpenEvent);

    // 2. Support data attribute: any element with [data-open-consultation]
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-open-consultation]");
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handleClick);

    // 3. Support URL hash #consultation
    const checkHash = () => {
      if (window.location.hash === "#consultation") {
        setIsOpen(true);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("open-consultation-modal", handleOpenEvent);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  return (
    <ConsultationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  return useContext(ConsultationModalContext);
}

