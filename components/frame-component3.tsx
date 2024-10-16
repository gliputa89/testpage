import type { NextPage } from "next";
import Component1 from "./component1";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.communityUpdatesWrapper, className].join(" ")}>
      <div className={styles.communityUpdates}>
        <div className={styles.community}>
          <h1 className={styles.sectionTitle}>Caring is the new marketing</h1>
          <div className={styles.description}>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </div>
        </div>
        <div className={styles.communityPost}>
          <Component1
            image18="/image-18@2x.png"
            creatingStreamlinedSafeguarding="Creating Streamlined Safeguarding Processes with OneRen"
          />
          <Component1
            image18="/image-19@2x.png"
            creatingStreamlinedSafeguarding="What are your safeguarding responsibilities and how can you manage them?"
          />
          <Component1
            image18="/image-20@2x.png"
            creatingStreamlinedSafeguarding="Revamping the Membership Model with Triathlon Australia"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
