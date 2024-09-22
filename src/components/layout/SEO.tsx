/* eslint-disable react-refresh/only-export-components */
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import staticOgImage from "../../assets/images/og-image.png";

// Define the props interface for the SEO component
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
  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Define default title and construct full title
  const defaultTitle = "Abdamin International Limited";
  const isHomePage = location.pathname === "/";
  const fullTitle = isHomePage ? defaultTitle : `${title} | ${defaultTitle}`;

  // Define default URLs
  const defaultUrl = "https://abdamin.com/";
  const defaultUrlWithWww = "https://www.abdamin.com/";

  // Determine the current URL, preferring the provided ogUrl if available
  const currentUrl =
    ogUrl ||
    (typeof window !== "undefined" && window.location.href.includes("www")
      ? defaultUrlWithWww
      : defaultUrl);

  // Create canonical URL (always non-www version)
  const canonicalUrl = currentUrl.replace("www.", "");

  // Ensure full URL for image, working in both client-side and server-side contexts
  const fullImageUrl = new URL(
    staticOgImage,
    typeof window !== "undefined" ? window.location.origin : defaultUrl,
  ).toString();

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {/* Include keywords meta tag if keywords are provided */}
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      {/* Robots meta tag - control indexing and following */}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Canonical URL - helps prevent duplicate content issues */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook meta tags */}
      {/* These tags optimize how the page appears when shared on Facebook and other platforms that support Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card meta tags */}
      {/* These tags optimize how the page appears when shared on Twitter */}
      {/* Note: twitter:site and twitter:creator tags are omitted as there's no official Twitter account */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={description} />
    </Helmet>
  );
};

export default SEO;
