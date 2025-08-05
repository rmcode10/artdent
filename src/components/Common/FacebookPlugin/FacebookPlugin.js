"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./FacebookPlugin.module.scss";

const FacebookPlugin = () => {
  const containerRef = useRef();
  const [width, setWidth] = useState(500);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setWidth(newWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const src = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FClinicaArtDentIasi&tabs=timeline&width=${width}&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <div ref={containerRef} className={styles.iframeContainer}>
      <iframe
        title="Facebook Page"
        src={src}
        width={width < 500 ? width : "500"}
        height="700"
        style={{ border: "none", margin: "0 auto" }}
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default FacebookPlugin;
