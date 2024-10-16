import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.membershipContentWrapper, className].join(" ")}>
      <div className={styles.membershipContent}>
        <div className={styles.membershipTypes}>
          <div className={styles.membershipOrganizatios}>
            <div className={styles.organizationIcons}>
              <div className={styles.icon}>
                <div className={styles.iconBackground}>
                  <div className={styles.iconShape} />
                  <img className={styles.icon1} alt="" src="/icon-1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.nationalAssociationsParent}>
              <h1 className={styles.membershipOrganisations}>
                Membership Organisations
              </h1>
              <div className={styles.membershipIcons}>
                <div className={styles.ourMembershipManagement}>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.nationalAssociations}>
          <div className={styles.organizationIcons}>
            <img className={styles.icon2} alt="" src="/icon-2.svg" />
          </div>
          <div className={styles.nationalAssociationsParent}>
            <h1 className={styles.membershipOrganisations}>
              National Associations
            </h1>
            <div className={styles.associationIcon1}>
              <div className={styles.ourMembershipManagement}>
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
        <div className={styles.membershipTypes}>
          <div className={styles.nationalAssociations2}>
            <div className={styles.iconWrapper}>
              <img className={styles.icon2} alt="" src="/icon-3.svg" />
            </div>
            <div className={styles.nationalAssociationsParent}>
              <div className={styles.clubsAndGroupsWrapper}>
                <h1 className={styles.clubsAndGroups}>Clubs And Groups</h1>
              </div>
              <div className={styles.ourMembershipManagement2}>
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
