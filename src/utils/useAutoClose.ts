// useAutoClose.ts
import { useEffect } from "react";

interface UseAutoCloseProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>[];
  targetRef?: React.RefObject<HTMLElement>;
}

const useAutoClose = ({ isOpen, setIsOpen, targetRef }: UseAutoCloseProps) => {
  useEffect(() => {
    const handleAutoClose = (event: MouseEvent) => {
      if (isOpen && !targetRef?.current?.contains(event.target as Node)) {
        setIsOpen?.forEach(setState => setState(false));
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleAutoClose);
    }

    return () => {
      document.removeEventListener("click", handleAutoClose);
    };
  }, [isOpen, setIsOpen, targetRef]);
};

export default useAutoClose;
