import { ReactNode } from "react";
import styles from "./Button.module.scss";

type Props = {
  children: ReactNode | ReactNode[];
};

const Button = ({ children }: Props) => {
  return (
    <a href="!#" className={`${styles.link} text-preset-2-bold`}>
      {children}
    </a>
  );
};

export default Button;
