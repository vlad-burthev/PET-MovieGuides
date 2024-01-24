import type { FC } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

import styles from "./Wrapper.module.scss";

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
