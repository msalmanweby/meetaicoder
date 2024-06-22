import { Inter, Poppins, Open_Sans } from "next/font/google";
import "../globals.css"
import 'tailwindcss/tailwind.css';
import { ReduxProvider } from "@/redux/provider";
import AdminSideNav from "../components/AdminSideNav";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata = {
    title: "Admin | Meet AI Coders"
  };

export default function Layout({children}) {
    return (
      <html>
        <body className={`bg-gray-950 ${poppins.className}`}>  
          <main className="flex w-full h-screen">
            <AdminSideNav/>
            <ReduxProvider>
              {children}
            </ReduxProvider>
          </main>
      </body>
    </html>
    
    )
  }