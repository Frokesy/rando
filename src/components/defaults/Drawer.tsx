"use client";

import { AnimatePresence,motion,useReducedMotion } from "framer-motion";
import { useEffect,useRef,type ReactNode } from "react";
import { CloseIcon } from "../icons";

type DrawerProps={
  id: string;
  isOpen: boolean;
  onClose: () => void;
  label: string;
  header?: ReactNode;
  children: ReactNode;
};

export default function Drawer({
  id,
  isOpen,
  onClose,
  label,
  header,
  children,
}: DrawerProps) {
  const dialogRef=useRef<HTMLDialogElement>(null);
  const reducedMotion=useReducedMotion();

  useEffect(() => {
    if(!isOpen) return;
    const dialog=dialogRef.current;
    if(dialog&&!dialog.open) dialog.showModal();
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow="hidden";
    return () => {
      document.body.style.overflow=previousOverflow;
    };
  },[isOpen]);

  return (
    <dialog
      ref={dialogRef}
      id={id}
      aria-label={label}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 text-black backdrop:bg-black/40"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
    >
      <AnimatePresence
        onExitComplete={() => {
          if(!isOpen) dialogRef.current?.close();
        }}
      >
        {isOpen&&(
          <motion.div
            key="drawer"
            initial={{ opacity: 0,y: reducedMotion? 0:24 }}
            animate={{ opacity: 1,y: 0 }}
            exit={{ opacity: 0,y: reducedMotion? 0:24 }}
            transition={{ duration: reducedMotion? 0:0.25,ease: "easeOut" }}
            className="h-dvh w-full overflow-y-auto bg-white px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))]"
          >
            <div className="mb-12 flex items-center justify-between">
              {header}
              <button
                type="button"
                aria-label={`Close ${label.toLowerCase()}`}
                className="ml-auto flex h-11 w-11 items-center justify-center rounded-full hover:bg-neutral-100"
                onClick={onClose}
              >
                <CloseIcon />
              </button>
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </dialog>
  );
}
