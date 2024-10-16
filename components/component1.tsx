import type { NextPage } from "next";
import styles from "./component1.module.css";

export type Component1Type = {
  className?: string;
  image18?: string;
  creatingStreamlinedSafeguarding?: string;
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  image18,
  creatingStreamlinedSafeguarding,
}) => {
  return (
    <div className={[styles.div, className].join(" ")}>
      <img className={styles.image18Icon} loading="lazy" alt="" src={image18} />
      <div className={styles.content}>
        <h3 className={styles.creatingStreamlinedSafeguard}>
          {creatingStreamlinedSafeguarding}
        </h3>
        <div className={styles.readmoreParent}>
          <h3 className={styles.readmore}>Readmore</h3>
          <img
            className={styles.arrowsDirectionsright}
            alt=""
            src="/24arrows--directionsright-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Component1;
