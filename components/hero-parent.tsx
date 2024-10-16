import type { NextPage } from "next";
import styles from "./hero-parent.module.css";

export type HeroParentType = {
  className?: string;
};

const HeroParent: NextPage<HeroParentType> = ({ className = "" }) => {
  return (
    <section className={[styles.heroParent, className].join(" ")}>
      <div className={styles.heroSection}>
        <div className={styles.textParent}>
          <div className={styles.text}>
            <h1 className={styles.lessonsAndInsightsContainer}>
              <span>{`Lessons and insights `}</span>
              <span className={styles.from8Years}>from 8 years</span>
            </h1>
            <div className={styles.whereToGrow}>
              Where to grow your business as a photographer: site or social
              media?
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.label}>Register</div>
          </button>
        </div>
        <img
          className={styles.illustrationIcon}
          loading="lazy"
          alt=""
          src="/illustration.svg"
        />
        <div className={styles.dot}>
          <div className={styles.dots} />
          <div className={styles.dots1} />
          <div className={styles.dots1} />
        </div>
      </div>
    </section>
  );
};

export default HeroParent;
