import * as React from "react"
//import  "../style/pages.css"
import "tailwindcss/tailwind.css"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div className="w-screen h-screen grid grid-rows-6 bg-gray-800 dark:bg-gray-800 ">
        <header className="row-span-1 h-full w-full bg-gray-200">
          <nav>
            <ul className="flex divide-x-2 divide-indigo-300">
              <li>Home</li>
              <li>Contact</li>
              <li>Art</li>
            </ul>
          </nav>
        </header>
        <section className=" h-full w-full row-span-4">
          "hello world"
        </section>
        <footer className="h-full w-full row-span-1 bg-gray-900">
          
        </footer>
      
      </div>
    </main>
      
  )
}

export default IndexPage
