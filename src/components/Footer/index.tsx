import FPLogo from "images/fp-logo.png";
import styles from "./styles.module.scss";

const Footer = () => (
    <footer className={styles["footer"]}>
        <img src={FPLogo} alt="FP logo" />
        <span>Blockchain to secure the way of communication</span>
    </footer>
);

export default Footer;
