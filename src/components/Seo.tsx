import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
};

export default function Seo({ title, description }: SeoProps) {
  const fullTitle = title.includes('Angelo Perini') ? title : `${title} | Angelo Perini`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Angelo Perini" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
