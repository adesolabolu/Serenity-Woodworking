import { Helmet } from 'react-helmet-async';

export function SEO({ title, description }: { title: string; description: string }) {
  const baseTitle = "Serenity Custom Woodworking";
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
