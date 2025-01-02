import Link from "next/link";

export function Footer() {
 return (
  <footer className="bg-gradient-to-b border-t-green-300 border py-6 mt-auto">
   <div className="container mx-auto px-4">
    <code className="flex flex-col md:flex-row justify-center items-center text-sm text-green-700 space-y-4 md:space-y-0">
     <div className="flex items-center space-x-2">
      <span>bootstrapped with</span>
      <Link
       href="https://v0.dev"
       className="hover:text-green-800 transition-colors"
       target="_blank"
       rel="noopener noreferrer"
      >
       v0 &
      </Link>
      <Link
       href="https://vercel.com"
       className="hover:text-green-800 transition-colors"
       target="_blank"
       rel="noopener noreferrer"
      >
       vercel
      </Link>
      <span>
       <span>/</span>
      </span>
      <Link
       href="https://twitter.com/josh_osagie"
       className="hover:text-green-800 transition-colors"
       target="_blank"
       rel="noopener noreferrer"
      >
       @josh_osagie
      </Link>
     </div>
    </code>
   </div>
  </footer>
 );
}
