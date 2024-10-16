import type { NextPage } from "next";
import styles from "./client-content.module.css";

export type ClientContentType = {
  className?: string;
};

const ClientContent: NextPage<ClientContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.clientContent, className].join(" ")}>
      <div className={styles.clientContentInner}>
        <div className={styles.clientsParent}>
          <div className={styles.clients}>
            <div className={styles.clientTitle}>
              <h1 className={styles.sectionTitle}>Our Clients</h1>
              <div className={styles.description}>
                We have been working with some Fortune 500+ clients
              </div>
            </div>
          </div>
          <div className={styles.clientsLogos}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo.svg"
            />
            <img className={styles.logoIcon} alt="" src="/logo-1.svg" />
            <img className={styles.logoIcon} alt="" src="/logo-2.svg" />
            <img className={styles.logoIcon} alt="" src="/logo-3.svg" />
            <img className={styles.logoIcon} alt="" src="/logo-4.svg" />
            <img className={styles.logoIcon} alt="" src="/logo-5.svg" />
            <img className={styles.logoIcon} alt="" src="/logo-2.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.sectionTitleWrapper}>
          <h1 className={styles.sectionTitle1}>
            Manage your entire community in a single system
          </h1>
        </div>
        <div className={styles.description}>Who is Nextcent suitable for?</div>
      </div>
    </section>
  );
};

export default ClientContent;
