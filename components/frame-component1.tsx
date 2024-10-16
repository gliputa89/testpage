import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.unlockWrapper, className].join(" ")}>
      <div className={styles.unlock}>
        <div className={styles.unlock1}>
          <img
            className={styles.unlockChild}
            loading="lazy"
            alt=""
            src="/frame-35.svg"
          />
          <div className={styles.unlockContent}>
            <div className={styles.theUnseenOfSpendingThreeYParent}>
              <h1 className={styles.theUnseenOf}>
                The unseen of spending three years at Pixelgrade
              </h1>
              <div className={styles.whenJoiningThe}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </div>
            </div>
            <button className={styles.button}>
              <a className={styles.label} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
