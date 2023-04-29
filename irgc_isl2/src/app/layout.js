import Link from "next/link"



const links =[{

label: "Home",
route: "/"
},

{
  label: "Wellcome",
  route: "/wellcome"

}]

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <title>next 13 :3</title>
      </head>
      <body>
        <header>
         <nav>
         <ul>
           {links.map(({label, route})=> (
              <li key={route}>
               <Link href={route}>
                 {label}
               </Link>
              </li>
           ) ) 
           }
         </ul>
        </nav>
        </header>
       {children}
      </body>
    </html>
  )
}
