import type { NextPage } from "next";
import ArrowsDirectionsRight from "./arrows-directions-right";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;
};

const Button: NextPage<ButtonType> = ({ className = "" }) => {
  return (
    <button className={[styles.button, className].join(" ")}>
      <div className={styles.label}>Get a Demo</div>
      <div className={styles.arrowsDirectionsrightWrapper}>
        <ArrowsDirectionsRight />
      </div>
    </button>
  );
};

export default Button;
