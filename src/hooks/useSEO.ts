import { useEffect } from "react";

/**
 * Dynamically updates document title and description tag for SEO rankings.
 * All pages using this custom hook will automatically project clean titles and descriptions.
 */
export function useSEO(title: string, description: string) {
  useEffect(() => {
    // Standardized branding suffix for all pages
    const baseTitle = "Serenity Custom Woodworking";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Manage meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute("content", description);

    // Add extra SEO features like OpenGraph title/description dynamically
    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (!ogTitleMeta) {
      ogTitleMeta = document.createElement("meta");
      ogTitleMeta.setAttribute("property", "og:title");
      document.head.appendChild(ogTitleMeta);
    }
    ogTitleMeta.setAttribute("content", title ? `${title} | ${baseTitle}` : baseTitle);

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (!ogDescMeta) {
      ogDescMeta = document.createElement("meta");
      ogDescMeta.setAttribute("property", "og:description");
      document.head.appendChild(ogDescMeta);
    }
    ogDescMeta.setAttribute("content", description);
  }, [title, description]);
}
