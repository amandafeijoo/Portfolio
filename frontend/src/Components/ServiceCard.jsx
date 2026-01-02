import {
  Card,
  CardTitle,
  CardSubtitle,
  FeaturesList,
  Feature,
  CardFooter,
} from "./styles/ServiceCard.styles";

export default function ServiceCard({
  title,
  subtitle,
  features,
  price,
  timeline,
  featured = false, // 👈 default
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
        <strong>{price}</strong>
        <span>{timeline}</span>
      </CardFooter>
    </Card>
  );
}
