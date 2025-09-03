import React from "react";

const SearchIcon = ({ styles = {}, color }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      style={styles}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>ionicons-v5-f</title>
        <path
          d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
          style={{
            fill: "none",
            stroke: color || "#000000",
            strokeMiterlimit: 10,
            strokeWidth: "32px",
          }}
        ></path>
        <line
          x1="338.29"
          y1="338.29"
          x2="448"
          y2="448"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeMiterlimit: 10,
            strokeWidth: "32px",
          }}
        ></line>
      </g>
    </svg>
  );
};

export default SearchIcon;
