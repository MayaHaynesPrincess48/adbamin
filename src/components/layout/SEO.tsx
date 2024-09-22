/* eslint-disable react-refresh/only-export-components */
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom"; // Import useLocation if using React Router
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
      <link rel="canonical" href={currentUrl.replace("www.", "")} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={staticOgImage} />
      <meta property="og:image:alt" content={description} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={staticOgImage} />
      <meta property="twitter:image:alt" content={description} />
    </Helmet>
  );
};

export default SEO;
