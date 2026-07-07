'use client';

import Script from 'next/script';

// Reemplazar TAWK_PROPERTY_ID y TAWK_WIDGET_ID con los valores reales de tu cuenta Tawk.to
export default function ChatWidget() {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

  if (!propertyId || !widgetId) return null;

  return (
    <Script id="tawk-widget" strategy="afterInteractive">
      {`
        var Tawk_API = Tawk_API || {};
        (function () {
          var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://embed.tawk.to/${propertyId}/${widgetId}";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();
      `}
    </Script>
  );
}
