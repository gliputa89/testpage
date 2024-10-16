import type { NextPage } from "next";
import ArrowsDirectionsRight1 from "./arrows-directions-right1";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.customersWrapper, className].join(" ")}>
      <div className={styles.customers}>
        <img
          className={styles.image9Icon}
          loading="lazy"
          alt=""
          src="/image-9@2x.png"
        />
        <div className={styles.contentParent}>
          <div className={styles.content}>
            <div className={styles.weHaveEnjoyed}>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </div>
            <div className={styles.reviewerInfo}>
              <h3 className={styles.timSmith}>Tim Smith</h3>
              <div className={styles.britishDragonBoat}>
                British Dragon Boat Racing Association
              </div>
            </div>
          </div>
          <div className={styles.logoStripParent}>
            <div className={styles.logoStrip}>
              <img className={styles.logoIcon} alt="" src="/logo-7.svg" />
              <img className={styles.logoIcon} alt="" src="/logo-8.svg" />
              <img className={styles.logoIcon} alt="" src="/logo-9.svg" />
              <img className={styles.logoIcon} alt="" src="/logo-10.svg" />
              <img className={styles.logoIcon} alt="" src="/logo-11.svg" />
              <img className={styles.logoIcon} alt="" src="/logo-12.svg" />
            </div>
            <div className={styles.meetAllCustomersParent}>
              <h3 className={styles.meetAllCustomers}>Meet all customers</h3>
              <ArrowsDirectionsRight1 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
