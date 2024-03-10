// useAutoClose.ts
import { useEffect } from "react";

interface UseAutoCloseProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>[];
  targetRef?: React.RefObject<HTMLElement>;
}

const useAutoClose = ({ isOpen, setIsOpen, targetRef }: UseAutoCloseProps) => {
  const handleAutoClose = (event: MouseEvent) => {
    if (isOpen && !targetRef?.current?.contains(event.target as Node)) {
      setIsOpen?.forEach((setState) => setState(false));
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleAutoClose);
    } else {
      document.removeEventListener("click", handleAutoClose);
    }

    return () => {
      document.removeEventListener("click", handleAutoClose);
    };
  });
};

export default useAutoClose;
