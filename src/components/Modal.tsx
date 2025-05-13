import { useEffect } from "react";
import { ModalProps } from "../schemas/types";

function Modal({ onClose, children }: ModalProps) {

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-[#1e293983] flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      {children}
    </div>
  );
}

export default Modal;
