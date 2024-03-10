import * as React from "react";
const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-arrow-right"
    {...props}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
export default ArrowIcon;
