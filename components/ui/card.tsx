import Flex from "../layout/flex";
import Image from "next/image";
import FlexItem from "../layout/flex-item";
import styles from "./card.module.css";

export interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "bottom";
}

const Card = ({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  imagePosition,
}: CardProps) => (
  <Flex
    direction={imagePosition === "bottom" ? "column-reverse" : "column"}
    className={styles.card}
  >
    {!!image && (
      <FlexItem>
        <Image src={image} alt={imageAlt} width={300} height={300} />
      </FlexItem>
    )}
    <FlexItem flex={1}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </FlexItem>
  </Flex>
);

export default Card;
