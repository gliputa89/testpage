import type { NextPage } from "next";
import Logo from "./logo";
import EssentialIconsSend from "./essential-icons-send";
import styles from "./footer-big.module.css";

export type FooterBigType = {
  className?: string;
  icon?: string;
  nexcent?: string;
  propWidth?: string;
  propHeight?: string;
  propAlignItems?: string;
  propHeight1?: string;
  propWidth1?: string;
  propHeight2?: string;
  propWidth2?: string;
  propJustifyContent?: string;
  propWidth3?: string;
  propHeight3?: string;
};

const FooterBig: NextPage<FooterBigType> = ({
  className = "",
  icon,
  nexcent,
  propWidth,
  propHeight,
  propAlignItems,
  propHeight1,
  propWidth1,
  propHeight2,
  propWidth2,
  propJustifyContent,
  propWidth3,
  propHeight3,
}) => {
  return (
    <footer className={[styles.footerBig4, className].join(" ")}>
      <div className={styles.companyInfo}>
        <Logo
          propWidth={propWidth}
          propHeight={propHeight}
          propAlignItems={propAlignItems}
          icon={icon}
          propHeight1={propHeight1}
          propWidth1={propWidth1}
          propHeight2={propHeight2}
          propWidth2={propWidth2}
          propJustifyContent={propJustifyContent}
          nexcent={nexcent}
          propWidth3={propWidth3}
          propHeight3={propHeight3}
        />
        <div className={styles.copyright}>
          <div className={styles.allRightsReserved}>
            Copyright © 2020 Nexcent ltd.
          </div>
          <div className={styles.allRightsReserved}>All rights reserved</div>
        </div>
        <div className={styles.socialLinks}>
          <img
            className={styles.socialIcons}
            loading="lazy"
            alt=""
            src="/social-icons.svg"
          />
          <img
            className={styles.socialIcons}
            alt=""
            src="/social-icons-1.svg"
          />
          <img
            className={styles.socialIcons}
            alt=""
            src="/social-icons-2.svg"
          />
          <img
            className={styles.socialIcons}
            alt=""
            src="/social-icons-3.svg"
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.col1Parent}>
          <div className={styles.col1}>
            <h3 className={styles.company}>Company</h3>
            <div className={styles.listItems}>
              <a className={styles.aboutUs} />
              <a className={styles.aboutUs} />
              <div className={styles.contactUs}>Contact us</div>
              <a className={styles.aboutUs} />
              <div className={styles.contactUs}>Testimonials</div>
            </div>
          </div>
          <div className={styles.col1}>
            <h3 className={styles.company}>Support</h3>
            <div className={styles.listItems}>
              <div className={styles.contactUs}>Help center</div>
              <div className={styles.contactUs}>Terms of service</div>
              <a className={styles.aboutUs} />
              <a className={styles.aboutUs} />
              <div className={styles.contactUs}>Status</div>
            </div>
          </div>
        </div>
        <div className={styles.col3}>
          <h3 className={styles.company}>Stay up to date</h3>
          <div className={styles.emailInputField}>
            <div className={styles.inputFieldBg} />
            <input
              className={styles.yourEmailAddress}
              placeholder="Your email address"
              type="text"
            />
            <div className={styles.essentialIconsSendWrapper}>
              <EssentialIconsSend />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBig;
