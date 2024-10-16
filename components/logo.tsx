import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./logo.module.css";

export type LogoType = {
  className?: string;
  icon?: string;
  nexcent?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propAlignItems?: CSSProperties["alignItems"];
  propHeight1?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propHeight2?: CSSProperties["height"];
  propWidth2?: CSSProperties["width"];
  propJustifyContent?: CSSProperties["justifyContent"];
  propWidth3?: CSSProperties["width"];
  propHeight3?: CSSProperties["height"];
};

const Logo: NextPage<LogoType> = ({
  className = "",
  propWidth,
  propHeight,
  propAlignItems,
  icon,
  propHeight1,
  propWidth1,
  propHeight2,
  propWidth2,
  propJustifyContent,
  nexcent,
  propWidth3,
  propHeight3,
}) => {
  const logoStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      alignItems: propAlignItems,
    };
  }, [propWidth, propHeight, propAlignItems]);

  const icon1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
    };
  }, [propHeight1, propWidth1]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth2,
      justifyContent: propJustifyContent,
    };
  }, [propHeight2, propWidth2, propJustifyContent]);

  const nexcentIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      height: propHeight3,
    };
  }, [propWidth3, propHeight3]);

  return (
    <div className={[styles.logo, className].join(" ")} style={logoStyle}>
      <img className={styles.icon} alt="" src={icon} style={icon1Style} />
      <div className={styles.nexcentWrapper} style={frameDivStyle}>
        <img
          className={styles.nexcentIcon}
          alt=""
          src={nexcent}
          style={nexcentIconStyle}
        />
      </div>
    </div>
  );
};

export default Logo;
