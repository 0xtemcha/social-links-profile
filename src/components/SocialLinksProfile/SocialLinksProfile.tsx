import styles from "./SocialLinksProfile.module.scss";
import avtarSrc from "../../assets/avatar-jessica.jpeg";
import Button from "../Button/Button";

const SocialLinksProfile = () => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={avtarSrc} alt="Jessica Randall" />
      </div>
      <div className={styles.info}>
        <h2 className="text-preset-1">Jessica Randall</h2>
        <span className={`${styles.address} text-preset-2-bold`}>
          London, United Kingdom
        </span>
      </div>
      <div className={`${styles.bio} text-preset-2`}>
        "Front-end developer and avid reader."
      </div>
      <div className={styles.buttonsList}>
        <Button>GitHub</Button>
        <Button>Frontend Mentor</Button>
        <Button>LinkedIn</Button>
        <Button>Twitter</Button>
        <Button>Instagram</Button>
      </div>
    </div>
  );
};

export default SocialLinksProfile;
