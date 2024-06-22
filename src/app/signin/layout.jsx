import { Poppins } from "next/font/google";
import "../globals.css"
import 'tailwindcss/tailwind.css';
import { ReduxProvider } from "@/redux/provider";


// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata = {
    title: "Admin | Meet AI Coders",
    description: "Meet AI Coders is emerging software development platform and consulting service which provides latest innovation and integration with Artificial Intelligence to their clients",
  };

export default function Layout({children}) {
    return (
      <html>
        <body className={`bg-gray-950 ${poppins.className}`}>  
          <main className="flex w-full h-screen">
            <ReduxProvider>
            {children}
            </ReduxProvider>
          </main>
      </body>
    </html>
    
    )
  }