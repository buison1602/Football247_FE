import React from 'react';
import { Article } from './ArticleGrid';
import { formatDateForStructuredData } from '../utils/date';

interface ArticleSchemaProps {
  article: Article;
  featured?: boolean;
}

/**
 * Component that generates JSON-LD structured data for news articles
 * This helps search engines understand the content and can enable rich snippets
 */
export const ArticleSchema: React.FC<ArticleSchemaProps> = ({ article, featured = false }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.description,
    "image": {
      "@type": "ImageObject",
      "url": article.imageUrl,
      "width": featured ? 680 : 330,
      "height": featured ? 320 : 180
    },
    "datePublished": formatDateForStructuredData(article.publishedAtRaw),
    "dateModified": formatDateForStructuredData(article.publishedAtRaw),
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Football247",
      "logo": {
        "@type": "ImageObject",
        "url": "https://football247.com/logo.png",
        "width": 200,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://football247.com/article/${article.id}`
    },
    "articleSection": "Sports",
    "keywords": article.tags.join(", "),
    "commentCount": article.commentCount,
    "inLanguage": "vi-VN",
    "isAccessibleForFree": true,
    "genre": "Sports News"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ArticleSchema;
