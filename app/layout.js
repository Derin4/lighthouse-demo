import "@fontsource/bodoni-moda/400.css";
import "@fontsource/bodoni-moda/500.css";
import "@fontsource/bodoni-moda/600.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "./_styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { site } from "./_libs/site";

export const metadata = {
  title: { default: site.title, template: "%s — " + site.name },
  description: site.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      style={{
        "--font-display-name": "'Bodoni Moda'",
        "--font-body-name": "'Jost'",
      }}
    >
      <body className='font-body text-ink bg-paper min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
