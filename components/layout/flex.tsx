import classnames from "classnames";
import { DivProps } from "react-html-props";
import styles from "././flex.module.css";

export interface FlexProps extends DivProps {
  align?: "left" | "center" | "right";
  justify?: "left" | "center" | "right";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
}

const Flex: React.FC<FlexProps> = ({
  align,
  justify,
  direction,
  children,
  className,
  ...rest
}) => (
  <div
    className={classnames(
      styles.flex,
      {
        [styles.alignLeft]: align === "left",
        [styles.alignCenter]: align === "center",
        [styles.alignRight]: align === "right",
        [styles.justifyLeft]: justify === "left",
        [styles.justifyCenter]: justify === "center",
        [styles.justifyRight]: justify === "right",
        [styles.directionRow]: direction === "row",
        [styles.directionColumn]: direction === "column",
        [styles.directionRowReverse]: direction === "row-reverse",
        [styles.directionColumnReverse]: direction === "column-reverse",
      },
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Flex;
