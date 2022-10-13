import * as React from "react";
const SvgPlay = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 54a24 24 0 1 0 0-48 24 24 0 0 0 0 48Zm-1.335-32.496A3 3 0 0 0 24 24v12a3 3 0 0 0 4.665 2.496l9-6a3 3 0 0 0 0-4.992l-9-6Z"
      fill="currentColor"
      stroke="currentColor"
    />
    <rect
      x={4}
      y={4}
      width={52}
      height={52}
      rx={26}
      strokeWidth={8}
    />
  </svg>
);
export default SvgPlay;
