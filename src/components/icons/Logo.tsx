import Link from "next/link";

type Props = {
  className?: string;
  Href: string;
};

export default function Logo({ Href, className }: Props) {
  return (
    <Link href={Href}>
      <svg
        className={`h-9 w-9 ${className}`}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.44052 7.38435H9.95148C11.5432 7.38435 12.9208 6.89944 12.9208 5.12552C12.9208 3.71806 11.7112 3.41913 10.5482 3.41913H7.28158L6.44052 7.38435ZM20.3443 16.8659H25.9433L20.8905 20.3632L21.7076 25.8742L17.3297 22.5481L11.4544 26L14.2015 20.159C14.2015 20.159 11.0063 16.8272 11.0088 16.8272C10.794 16.5436 10.7222 15.8132 10.7222 15.4989C10.7222 15.1016 10.7476 14.6992 10.7746 14.2706C10.8054 13.7822 10.8383 13.2599 10.8383 12.6723C10.8383 11.2223 10.1977 10.464 8.63164 10.464H5.69546L4.41699 16.4493H0L3.51262 0H11.8248C14.9137 0 17.2711 0.759898 17.2711 4.26394C17.2711 6.73043 16.0572 8.48245 13.3793 8.85033V8.89759C14.6385 9.19693 15.1102 10.0487 15.1102 11.636C15.1102 12.2697 15.091 12.8258 15.0728 13.3489C15.0567 13.8134 15.0415 14.2517 15.0415 14.6952C15.0415 15.2636 15.1893 16.1927 15.5613 16.8272H16.175L19.4563 11.3459L20.3443 16.8659ZM19.6495 17.6698H23.3653L20.0153 19.9878L20.6139 24.0291L17.3905 21.5779L13.2984 23.9806L15.1717 20.0029L12.8939 17.6307H16.6388L19.0079 13.6733L19.6495 17.6698Z"
          fill="white"
        />
      </svg>
    </Link>
  );
}
