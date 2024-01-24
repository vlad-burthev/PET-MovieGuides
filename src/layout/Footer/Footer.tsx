import type { FC } from "react";

interface FooterProps {}

import styles from "./Footer.module.scss";

const Footer: FC<FooterProps> = () => {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <div>Copy Right &copy; 2023-{date.getFullYear()}</div>
    </footer>
  );
};

export default Footer;
