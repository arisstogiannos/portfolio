import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Aris Stogiannos",
  description: "Creating websites and web applications that stand out.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden   bg-mblack '>
        {children}
        <SpeedInsights />

      </body>
    </html>
  );
}
