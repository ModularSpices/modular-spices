import localFont from "next/font/local";
export const headingFont = localFont({
  src: [
    {
      path: "../public/assets/fonts/ABCGravity-Compressed.woff2",
      type: "woff2",
    },
  ],
});

export const titleFont = localFont({
  src: [
    {
      path: "../public/assets/fonts/DrukWide-Bold.woff2",
      type: "woff2",
    },
  ],
});

export const textFont = localFont({
  src: [
    {
      path: "../public/assets/fonts/Bolivia-Condensed.woff2",
      type: "woff2",
    },
  ],
});
