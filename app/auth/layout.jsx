import { Inter, Poppins, Open_Sans } from "next/font/google";
import "../globals.css";
import 'tailwindcss/tailwind.css';


const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata = {
    title: "Meet AI Coders",
    description: "Meet AI Coders is emerging software development platform and consulting service which provides latest innovation and integration with Artificial Intelligence to their clients",
  };

export default function Layout({children}) {
    return (
      <html>
        <body className={`bg-gray-950 ${poppins.className}`}>  
        <main>
            {children}
            </main>
      </body>
    </html>
    
    )
  }