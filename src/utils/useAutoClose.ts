// useAutoClose.ts
import { useEffect } from "react";

interface UseAutoCloseProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  targetRef?: React.RefObject<HTMLElement>;
}

const useAutoClose = ({ isOpen, setIsOpen, targetRef }: UseAutoCloseProps) => {
  const handleAutoClose = (event: MouseEvent) => {
    if (isOpen && !targetRef?.current?.contains(event.target as Node)) {
        setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleAutoClose);
    }

    return () => {
      document.removeEventListener("click", handleAutoClose);
    };
  }, [isOpen, setIsOpen, targetRef]);
};

export default useAutoClose;