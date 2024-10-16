import type { NextPage } from "next";
import styles from "./unlock-visuals.module.css";

export type UnlockVisualsType = {
  className?: string;
};

const UnlockVisuals: NextPage<UnlockVisualsType> = ({ className = "" }) => {
  return (
    <section className={[styles.unlockVisuals, className].join(" ")}>
      <div className={styles.unlock}>
        <div className={styles.visualElements}>
          <img className={styles.floorIcon} alt="" src="/floor.svg" />
          <div className={styles.backgroundCompleteParent}>
            <img className={styles.backgroundCompleteIcon} alt="" />
            <img
              className={styles.plantIcon}
              loading="lazy"
              alt=""
              src="/plant.svg"
            />
            <img
              className={styles.padlockIcon}
              loading="lazy"
              alt=""
              src="/padlock.svg"
            />
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.vectorGroup}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className={styles.singUp}>SING UP</div>
                </div>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector-4.svg"
                />
                <div className={styles.frameDiv}>
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector-5.svg"
                  />
                  <div className={styles.vectorParent1}>
                    <img
                      className={styles.vectorIcon6}
                      alt=""
                      src="/vector1.svg"
                    />
                    <img
                      className={styles.vectorIcon7}
                      alt=""
                      src="/vector-6.svg"
                    />
                  </div>
                </div>
                <div className={styles.vectorParent2}>
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector-7.svg"
                  />
                  <img
                    className={styles.vectorIcon9}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={styles.vectorIcon10}
                    alt=""
                    src="/vector-9.svg"
                  />
                </div>
                <div className={styles.vectorParent3}>
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className={styles.vectorParent4}>
                    <img
                      className={styles.vectorIcon12}
                      alt=""
                      src="/vector-11.svg"
                    />
                    <img
                      className={styles.vectorIcon13}
                      alt=""
                      src="/vector-12.svg"
                    />
                    <img
                      className={styles.vectorIcon14}
                      alt=""
                      src="/vector-13.svg"
                    />
                    <img className={styles.groupIcon} alt="" src="/group.svg" />
                  </div>
                </div>
                <div className={styles.vectorParent5}>
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector-14.svg"
                  />
                  <img
                    className={styles.vectorIcon16}
                    alt=""
                    src="/vector-15.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon17}
                  alt=""
                  src="/vector-16.svg"
                />
                <img
                  className={styles.vectorIcon18}
                  alt=""
                  src="/vector-17.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.backgroundSimpleParent}>
            <img className={styles.backgroundCompleteIcon} alt="" />
            <img
              className={styles.speechBubbleIcon}
              alt=""
              src="/speechbubble.svg"
            />
          </div>
          <div className={styles.vectorParent6}>
            <img className={styles.vectorIcon19} alt="" src="/vector-18.svg" />
            <img className={styles.vectorIcon20} alt="" src="/vector-19.svg" />
            <img className={styles.vectorIcon21} alt="" src="/vector-20.svg" />
            <img className={styles.vectorIcon22} alt="" src="/vector-21.svg" />
            <img className={styles.vectorIcon23} alt="" src="/vector-22.svg" />
            <img className={styles.vectorIcon24} alt="" src="/vector-23.svg" />
            <img className={styles.vectorIcon25} alt="" src="/vector-24.svg" />
            <img className={styles.vectorIcon26} alt="" src="/vector-25.svg" />
            <img className={styles.vectorIcon27} alt="" src="/vector-26.svg" />
            <img className={styles.vectorIcon28} alt="" src="/vector-27.svg" />
            <img
              className={styles.backgroundCompleteIcon}
              alt=""
              src="/character.svg"
            />
          </div>
        </div>
        <div className={styles.unlockInner}>
          <div className={styles.frameParent}>
            <div className={styles.howToDesignYourSiteFooterParent}>
              <h1 className={styles.howToDesign}>
                How to design your site footer like we did
              </h1>
              <div className={styles.oneEventCalendar}>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
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

export default UnlockVisuals;
