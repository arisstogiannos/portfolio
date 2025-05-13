import "./globals.css";

export const metadata = {
  title: "Aris Stogiannos | Web Design & Development",
  description: "I design and develop high-quality websites and web apps tailored to your brand. Let's create something amazing together.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden  bg-mblack '>
        {children}
      </body>
    </html>
  );
}
