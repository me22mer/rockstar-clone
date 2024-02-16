type Props = {
  className?: string;
};

export default function ArrowChevonDownIcon ({ className }: Props) {
  return (
    <svg

      className={`w-5 h-5 ${className}`}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.14645 4.14645C3.34171 3.95118 3.65829 3.95118 3.85355 4.14645L6.5 6.79289L9.14645 4.14645C9.34171 3.95118 9.65829 3.95118 9.85355 4.14645C10.0488 4.34171 10.0488 4.65829 9.85355 4.85355L6.85355 7.85355C6.65829 8.04882 6.34171 8.04882 6.14645 7.85355L3.14645 4.85355C2.95118 4.65829 2.95118 4.34171 3.14645 4.14645Z"
        fill="white"
      />
    </svg>
  );
}
