export default function ThrashIcon({ onClick }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M10 5V4.5C10 3.39543 10.8954 2.5 12 2.5V2.5C13.1046 2.5 14 3.39543 14 4.5V5"
        stroke="#0194F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M5 8V19C5 20.1046 5.89543 21 7 21H8M5 8H8M5 8V8C4.44772 8 4 7.55228 4 7V6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V7C20 7.55228 19.5523 8 19 8V8M19 8V19C19 20.1046 18.1046 21 17 21H16M19 8H16M8 8V21M8 8H12M8 21H12M12 8V21M12 8H16M12 21H16M16 8V21"
        stroke="#687176"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
