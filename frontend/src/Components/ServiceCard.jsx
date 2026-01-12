import {
  Card,
  CardTitle,
  CardSubtitle,
  FeaturesList,
  Feature,
  CardFooter,
  PriceDivider,
} from "./styles/ServiceCard.styles";

export default function ServiceCard({
  title,
  subtitle,
  features,
  price,
  timeline,
  featured = false,
}) {
  return (
    <Card
      featured={featured}
      whileHover={{ y: -4, scale: featured ? 1.015 : 1.01 }}
    >
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>

      <FeaturesList>
        {features.map((feature, i) => (
          <Feature key={i}>{feature}</Feature>
        ))}
      </FeaturesList>

      <CardFooter>
        <PriceDivider />
        <strong>{price}</strong>
        <span>{timeline}</span>
      </CardFooter>
    </Card>
  );
}
