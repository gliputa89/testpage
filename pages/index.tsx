import type { NextPage } from "next";
import Main from "../components/main";
import HeroParent from "../components/hero-parent";
import ClientContent from "../components/client-content";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import AchievementParent from "../components/achievement-parent";
import UnlockVisuals from "../components/unlock-visuals";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import Button from "../components/button";
import FooterBig from "../components/footer-big";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage}>
      <Main />
      <HeroParent />
      <ClientContent />
      <FrameComponent />
      <FrameComponent1 />
      <AchievementParent />
      <UnlockVisuals />
      <FrameComponent2 />
      <FrameComponent3 />
      <section className={styles.letNextcentDoTheWorkSoYoParent}>
        <h1 className={styles.letNextcentDo}>
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <div className={styles.bottomButton}>
          <Button />
        </div>
      </section>
      <FooterBig icon="/icon-8.svg" nexcent="/nexcent-1.svg" />
    </div>
  );
};

export default LandingPage;
