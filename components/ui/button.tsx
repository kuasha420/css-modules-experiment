import classnames from "classnames";
import { ButtonProps as HTMLButtonProps } from "react-html-props";
import styles from "./button.module.css";

export interface ButtonProps extends HTMLButtonProps {
  color?: "primary" | "success" | "danger" | "warning" | "info";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  size = "md",
  children,
  ...rest
}) => (
  <button
    className={classnames(styles.btn, styles[color], styles[size])}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
