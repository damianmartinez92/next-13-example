import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Next 13 Example",
  description: "Generated by create next app",
  keywords: "next,react,app,example,next13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/5/darkly/bootstrap.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
          integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Navigation />
        <div className="container p-4">{children}</div>
      </body>
    </html>
  );
}
