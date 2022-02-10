import type { NextPage } from "next";
import Flex from "../components/layout/flex";
import FlexItem from "../components/layout/flex-item";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <Flex direction="column" className={styles.container}>
      <FlexItem
        className="bg-blue"
        flex={1}
        justify="center"
        align="center"
        flexbox
      >
        <h1>Hello CSS Modules</h1>
      </FlexItem>
      <FlexItem className="bg-green" flex={3}>
        <Card
          title="CSS Module"
          subtitle="CSS Module is awesome!"
          description="A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. All URLs (url(...)) and @imports are in module request format (./xxx and ../xxx means relative, xxx and xxx/yyy means in modules folder, i. e. in node_modules)."
          image="/image.jpg"
          imageAlt="CSS Module"
          imagePosition="bottom"
        />
      </FlexItem>
      <FlexItem className="bg-red" flex={1} flexbox justify="center">
        <Button>Click me!</Button>
        <Button color="success" role="link">
          Click me too!
        </Button>
      </FlexItem>
    </Flex>
  );
};

export default Home;
