"use client"
import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, className }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className={`relative bg-white rounded-2xl shadow-xl w-full max-w-lg mx-auto p-0 ${className || ""}`}> 
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Fermer"
        >
          &times;
        </button>
        {title && <div className="text-center text-xl font-bold pt-8 pb-4">{title}</div>}
        <div className="px-8 pb-8">{children}</div>
      </div>
    </div>
  );
};

export default Modal; 