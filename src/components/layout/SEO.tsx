/* eslint-disable react-refresh/only-export-components */
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import staticOgImage from "../../assets/images/og-image.png";

interface SEOProps {
  title?: string;
  description: string;
  keywords?: string[];
  ogUrl?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  ogUrl,
  noindex = false,
}: SEOProps) => {
  const location = useLocation(); // Get the current location
  const defaultTitle = "Abdamin International Limited";

  // Determine if the current path is the homepage
  const isHomePage = location.pathname === "/";

  // Set the full title based on the current page
  const fullTitle = isHomePage ? defaultTitle : `${title} | ${defaultTitle}`;

  const defaultUrl = "https://abdamin.com/";
  const defaultUrlWithWww = "https://www.abdamin.com/";

  // Determine the current URL
  const currentUrl =
    ogUrl ||
    (typeof window !== "undefined" && window.location.href.includes("www")
      ? defaultUrlWithWww
      : defaultUrl);

  // Determine the canonical URL
  const canonicalUrl = currentUrl.replace("www.", "");

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      {/* Robots meta tag */}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Canonical URL - always use the non-www version for consistency */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" name="og:type" content="website" />
      <meta property="og:url" name="og:url" content={currentUrl} />
      <meta property="og:title" name="og:title" content={fullTitle} />
      <meta
        property="og:description"
        name="og:description"
        content={description}
      />
      <meta property="og:image" name="og:image" content={staticOgImage} />
      <meta property="og:image:alt" name="og:image:alt" content={description} />

      {/* Twitter */}
      <meta
        property="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta property="twitter:url" name="twitter:url" content={currentUrl} />
      <meta property="twitter:title" name="twitter:title" content={fullTitle} />
      <meta
        property="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta
        property="twitter:image"
        name="twitter:image"
        content={staticOgImage}
      />
      <meta
        property="twitter:image:alt"
        name="twitter:image:alt"
        content={description}
      />
    </Helmet>
  );
};

export default SEO;
