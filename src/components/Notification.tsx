import { useEffect, useState } from "react";
import { NotificationProps } from "../schemas/types";

const Notification = ({ message, type = "info", delay }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const notificationStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 p-8 rounded-lg shadow-lg ${notificationStyles[type]} flex items-center space-x-4`}
    >
      <span>{message}</span>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-2 text-white hover:text-gray-200 text-2xl cursor-pointer"
      >
        ×
      </button>
    </div>
  );
};

export default Notification;
