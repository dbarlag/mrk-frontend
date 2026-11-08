import { HeartIcon, MenuElipsisVerticalIcon } from "@navikt/aksel-icons";
import {
  Button,
  Card,
  CardBlock,
  Heading,
  Paragraph,
} from "@norwegianredcross/designsystem";
import styles from "./ContentCard.module.css";

type ContentCardProps = {
  image: string;
  subtitle: string;
  title: string;
  text: string;
};

/** Article-style card with image, text and like/more actions ("Nytting"). */
export function ContentCard({ image, subtitle, title, text }: ContentCardProps) {
  return (
    <Card data-color="neutral" className={styles.card}>
      <CardBlock className={styles.media}>
        {/* eslint-disable-next-line @next/next/no-img-element -- placeholder content image */}
        <img src={image} alt="" className={styles.image} />
      </CardBlock>
      <CardBlock className={styles.content}>
        <div>
          <Paragraph data-size="sm">{subtitle}</Paragraph>
          <Heading level={3} data-size="md" className={styles.title}>
            {title}
          </Heading>
        </div>
        <Paragraph>{text}</Paragraph>
        <div className={styles.footer}>
          <Button icon variant="tertiary" data-color="neutral" aria-label="Lik">
            <HeartIcon aria-hidden />
          </Button>
          <Button icon variant="tertiary" data-color="primary-color-red" aria-label="Flere valg">
            <MenuElipsisVerticalIcon aria-hidden />
          </Button>
        </div>
      </CardBlock>
    </Card>
  );
}
