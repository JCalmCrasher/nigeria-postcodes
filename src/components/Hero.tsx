import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
 const scrollToTable = () => {
  const tableSection = document.getElementById("postcodes-table");
  if (tableSection) {
   tableSection.scrollIntoView({ behavior: "smooth" });
  }
 };

 return (
  <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-800 text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
   <div className="max-w-3xl mx-auto text-center relative z-10">
    <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl mb-6 animate-fade-in-up">
     Nigeria Postcodes
    </h1>
    <p className="mt-6 text-xl sm:text-2xl mb-10 animate-fade-in-up animation-delay-300">
     Easily find and manage postcodes across Nigeria
    </p>
    <Button
     size="lg"
     className="bg-white text-green-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-600"
     onClick={scrollToTable}
    >
     Get Started <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
   </div>
   <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -bottom-1/2 -right-1/4 w-3/4 h-3/4 bg-white/10 rounded-full animate-blob animation-delay-2000"></div>
    <div className="absolute -top-1/2 -left-1/4 w-3/4 h-3/4 bg-white/10 rounded-full animate-blob animation-delay-4000"></div>
   </div>
  </div>
 );
}
