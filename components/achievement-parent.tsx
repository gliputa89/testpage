import type { NextPage } from "next";
import FirstRow from "./first-row";
import styles from "./achievement-parent.module.css";

export type AchievementParentType = {
  className?: string;
};

const AchievementParent: NextPage<AchievementParentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.achievementParent, className].join(" ")}>
      <div className={styles.achievements}>
        <div className={styles.sectionHeading}>
          <div className={styles.sectionHeading1}>
            <h1 className={styles.sectionTitle}>
              <span>{`Helping a local `}</span>
              <span className={styles.businessReinventItself}>
                business reinvent itself
              </span>
            </h1>
          </div>
          <div className={styles.description}>
            We reached here with our hard work and dedication
          </div>
        </div>
        <div className={styles.counts}>
          <div className={styles.row1}>
            <FirstRow icon="/icon-4.svg" number="2,245,341" label="Members" />
            <FirstRow
              icon="/icon-5.svg"
              propOverflow="unset"
              number="46,328"
              label="Clubs"
            />
          </div>
          <div className={styles.row1}>
            <FirstRow
              icon="/icon-6.svg"
              propOverflow="hidden"
              number="828,867"
              label="Event Bookings"
            />
            <FirstRow
              icon="/icon-7.svg"
              propOverflow="hidden"
              number="1,926,436"
              label="Payments"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementParent;
