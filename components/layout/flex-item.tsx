import classnames from "classnames";
import { DivProps } from "react-html-props";
import styles from "./flex-item.module.css";
import flexstyle from "./flex.module.css";

export interface FlexItemProps extends DivProps {
  align?: "left" | "center" | "right";
  alignSelf?: "left" | "center" | "right";
  justify?: "left" | "center" | "right";
  flex?: number;
  flexbox?: boolean;
}

const FlexItem: React.FC<FlexItemProps> = ({
  align,
  justify,
  alignSelf,
  children,
  style,
  flex,
  className,
  flexbox,
  ...rest
}) => (
  <div
    className={classnames(
      styles.flex,
      {
        [flexstyle.alignLeft]: align === "left",
        [flexstyle.alignCenter]: align === "center",
        [flexstyle.alignRight]: align === "right",
        [flexstyle.justifyLeft]: justify === "left",
        [flexstyle.justifyCenter]: justify === "center",
        [flexstyle.justifyRight]: justify === "right",
        [styles.alignLeft]: alignSelf === "left",
        [styles.alignCenter]: alignSelf === "center",
        [styles.alignRight]: alignSelf === "right",
        [flexstyle.flex]: flexbox,
      },
      className
    )}
    style={{
      ...style,
      flex,
    }}
    {...rest}
  >
    {children}
  </div>
);

export default FlexItem;
