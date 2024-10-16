import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./first-row.module.css";

export type FirstRowType = {
  className?: string;
  icon?: string;
  number?: string;
  label?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
};

const FirstRow: NextPage<FirstRowType> = ({
  className = "",
  icon,
  propOverflow,
  number,
  label,
}) => {
  const iconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={[styles.firstRow, className].join(" ")}>
      <img className={styles.icon} alt="" src={icon} style={iconStyle} />
      <div className={styles.details}>
        <b className={styles.number}>{number}</b>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
};

export default FirstRow;
