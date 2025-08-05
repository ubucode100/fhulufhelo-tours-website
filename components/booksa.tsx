"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    BookSAWidget: {
      init: (config: {
        tenant: string;
        showPrice?: boolean;
        showTitle?: boolean;
        development?: boolean;
      }) => boolean;

      open: (
        listingIdOrOptions:
          | string
          | {
              listingId: string;
              showPrice?: boolean;
              showTitle?: boolean;
            },
        options?: {
          showPrice?: boolean;
          showTitle?: boolean;
        }
      ) => boolean;

      close: () => boolean;
      isOpen: () => boolean;
      getConfig: () =>
        | {
            tenant: string;
            showPrice: boolean;
            showTitle: boolean;
            development: boolean;
          }
        | null;
      getCurrentListing: () => string | null;
    };
  }
}


const BookSAScript = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render script after client hydration to avoid mismatch
  if (!isClient) {
    return null;
  }

  return (
    <Script
      src="https://www.booksa.co.za/widget.js?v=2.3"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.BookSAWidget) {
          window.BookSAWidget.init({
            tenant: "fhulufhelo",
            showPrice: true,
            showTitle: true
          });
        }
      }}
      onError={(error) => {
        console.error('Failed to load BookSA widget:', error);
      }}
    />
  );
};

export default BookSAScript;