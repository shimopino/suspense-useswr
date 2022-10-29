import { ReactNode } from "react";
import styles from "./Card.module.scss";

export const Card = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
