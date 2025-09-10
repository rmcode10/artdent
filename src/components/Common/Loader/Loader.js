import React from "react";
import classes from "./Loader.module.scss";

const Loader = ({ styles }) => {
  return <div className={classes.loader} style={styles}></div>;
};

export default Loader;
