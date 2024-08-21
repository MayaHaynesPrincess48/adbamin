/* eslint-disable react-refresh/only-export-components */
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
}

const SEO = ({ title, description, keywords }: SEOProps) => {
  return (
    <Helmet>
      <title>{`${title} | Abdamin International Limited`}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
    </Helmet>
  );
};

export default SEO;
