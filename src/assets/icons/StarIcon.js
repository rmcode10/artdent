import { PRIMARY_COLOR } from "@/consts/general";
import React from "react";

const StarIcon = ({ color = PRIMARY_COLOR, width = "20px" }) => {
  return (
    <svg
      viewBox="0 -0.5 33 33"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      style={{ width }}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g
          id="Vivid.JS"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <g
            id="Vivid-Icons"
            transform="translate(-903.000000, -411.000000)"
            fill={color}
          >
            {" "}
            <g id="Icons" transform="translate(37.000000, 169.000000)">
              {" "}
              <g id="star" transform="translate(858.000000, 234.000000)">
                {" "}
                <g transform="translate(7.000000, 8.000000)" id="Shape">
                  {" "}
                  <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22">
                    {" "}
                  </polygon>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export default StarIcon;
