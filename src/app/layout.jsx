import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "Alidzhan Hasan Hyusein!",
  description: "turk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className="relative bg-white text-black"
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
