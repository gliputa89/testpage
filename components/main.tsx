import type { NextPage } from "next";
import Logo from "./logo";
import styles from "./main.module.css";

export type MainType = {
  className?: string;
};

const Main: NextPage<MainType> = ({ className = "" }) => {
  return (
    <header className={[styles.main, className].join(" ")}>
      <div className={styles.content}>
        <Logo
          propWidth="154.5px"
          propHeight="24px"
          propAlignItems="flex-end"
          icon="/icon.svg"
          propHeight1="24px"
          propWidth1="35px"
          propHeight2="22.3px"
          propWidth2="111.5px"
          propJustifyContent="flex-end"
          nexcent="/nexcent.svg"
          propWidth3="111.5px"
          propHeight3="20.7px"
        />
      </div>
      <nav className={styles.topNav}>
        <nav className={styles.labelParent}>
          <a className={styles.label} />
          <a className={styles.label1} />
          <a className={styles.label2} />
          <a className={styles.label3} />
          <a className={styles.label1} />
          <a className={styles.label5} />
        </nav>
      </nav>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <a className={styles.login} />
        </button>
        <button className={styles.button1}>
          <a className={styles.signUp} />
        </button>
      </div>
    </header>
  );
};

export default Main;
