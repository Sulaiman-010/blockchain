import styles from "./styles.module.scss";

const Header = () => (
    <header className={styles["header"]}>
        <div className={styles["header__title"]}>Blockchain Based Data Sharing Mechanisum for Healthcare System</div>

        {/* <div className={styles["header__images"]}>
            <img src={EthereumLogo} alt="Ethereum logo" />
            <img src={IPFSLogo} alt="IPFS logo" />
            <img src={TruffleLogo} alt="Truffle logo" />
            <img src={ReactLogo} alt="React logo" />
        </div> */}
    </header>
);

export default Header;
