import type { NextPage } from "next";
import styles from "./essential-icons-send.module.css";

export type EssentialIconsSendType = {
  className?: string;
};

const EssentialIconsSend: NextPage<EssentialIconsSendType> = ({
  className = "",
}) => {
  return (
    <img
      className={[styles.essentialIconsSend, className].join(" ")}
      alt=""
      src="/essential-icons--send.svg"
    />
  );
};

export default EssentialIconsSend;
