import type { NextPage } from "next";
import styles from "./arrows-directions-right1.module.css";

export type ArrowsDirectionsRight1Type = {
  className?: string;
};

const ArrowsDirectionsRight1: NextPage<ArrowsDirectionsRight1Type> = ({
  className = "",
}) => {
  return (
    <img
      className={[styles.arrowsDirectionsright, className].join(" ")}
      alt=""
      src="/24arrows--directionsright@2x.png"
    />
  );
};

export default ArrowsDirectionsRight1;
