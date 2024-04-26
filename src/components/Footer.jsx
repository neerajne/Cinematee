import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://www.instagram.com/neeraj_77____/" rel="noreferrer" target="blank"  className="mr-4 hover:underline md:mr-6 ">Instagram</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/narendra-negi-2613012a1/"  className="mr-4 hover:underline md:mr-6" target="blank" rel="noreferror" >LinkedIn</a>
              </li>
              <li>
                  <a href="https://github.com/neerajne"  className="hover:underline" target="blank" rel="noreferror">Github</a>
              </li>
          </ul>
      </footer>
  )
}