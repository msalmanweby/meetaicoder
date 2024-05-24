import { Inter, Poppins, Open_Sans } from "next/font/google";
import NavigationMenu from "./components/NavigationMenu";
import 'tailwindcss/tailwind.css';
import "./globals.css";
import EmbedChatbot from "./components/EmbedChatbot";
import Footer from "./components/Footer";
import Notify from "./components/Notify";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata = {
  title: "Meet AI Coders",
  description: "Meet AI Coder is emerging software development platform and consulting service which provides latest innovation and integration with Artificial Intelligence to their clients",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-950 ${poppins.className}`}>
        <main>
          <NavigationMenu />
          <EmbedChatbot />
          <ReduxProvider>
            {children}
          </ReduxProvider>
          <Footer />
        </main>
      </body>
    </html>
  );

}