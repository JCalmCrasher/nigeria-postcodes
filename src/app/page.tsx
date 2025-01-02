"use client";

import { useState } from "react";
import { usePostcodes } from "../hooks/usePostcodes";
import { Button } from "@/components/ui/button";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue
} from "@/components/ui/select";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Copy } from "lucide-react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger
} from "@/components/ui/tooltip";
import { copyAsCSV, copyAsJSON } from "../utils/copyUtils";

export default function PostcodesPage() {
 const { postcodes, regions, selectedRegion, setSelectedRegion } =
  usePostcodes();
 const [copiedFormat, setCopiedFormat] = useState<"JSON" | "CSV" | null>(null);
 const [copiedCell, setCopiedCell] = useState<string | null>(null);

 const handleCopy = (format: "JSON" | "CSV") => {
  if (format === "JSON") {
   copyAsJSON(postcodes);
  } else {
   copyAsCSV(postcodes);
  }
  setCopiedFormat(format);
  setTimeout(() => setCopiedFormat(null), 2000);
 };

 const handleCopyCell = (content: string) => {
  navigator.clipboard.writeText(content);
  setCopiedCell(content);
  setTimeout(() => setCopiedCell(null), 2000);
 };

 return (
  <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
    
   <Hero />
   <Features />

   <div className="container mx-auto p-4 max-w-4xl mb-10">
    <Card
     id="postcodes-table"
     className="md:border border-none mb-6 md:shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up overflow-hidden scroll-mt-16"
    >
     <CardHeader className="bg-gradient-to-r from-green-700 to-green-800 text-white">
      <CardTitle className="text-2xl font-bold">Find Postcodes</CardTitle>
     </CardHeader>
     <CardContent className="px-2 py-6 md:px-6">
      <div className="flex gap-2 mb-6">
       <div>
        <label
         htmlFor="region-select"
         className="block text-sm font-medium text-gray-700 mb-2"
        >
         Select State
        </label>
        <Select
         value={selectedRegion || "all"}
         onValueChange={(value) =>
          setSelectedRegion(value === "all" ? null : value)
         }
        >
         <SelectTrigger id="region-select" className="w-full md:w-[200px]">
          <SelectValue placeholder="Select a state" />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value="all">All States</SelectItem>
          {regions.map((region) => (
           <SelectItem key={region} value={region}>
            {region}
           </SelectItem>
          ))}
         </SelectContent>
        </Select>
       </div>

       {/* LGA Select */}
       <TooltipProvider>
        <Tooltip>
         <TooltipTrigger asChild>
          <div>
           <label
            htmlFor="lga-select"
            className="block text-sm font-medium text-gray-700 mb-2"
           >
            Select LGA
           </label>
           <Select disabled>
            <SelectTrigger
             id="lga-select"
             className="w-full md:w-[200px] bg-gray-50 cursor-not-allowed"
            >
             <SelectValue placeholder="Select an LGA" />
            </SelectTrigger>
            <SelectContent>
             <SelectItem value="all">All LGAs</SelectItem>
            </SelectContent>
           </Select>
          </div>
         </TooltipTrigger>
         <TooltipContent>
          <p className="text-sm">Coming soon!</p>
         </TooltipContent>
        </Tooltip>
       </TooltipProvider>
      </div>
      <div className="hidden md:block">
       <div
        className="overflow-y-auto bg-white rounded-lg shadow"
        style={{ maxHeight: "480px" }}
       >
        <Table>
         <TableHeader className="sticky top-0 bg-white z-10">
          <TableRow className="bg-gradient-to-r from-green-50 to-green-100">
           <TableHead className="font-bold text-green-800">Code</TableHead>
           <TableHead className="font-bold text-green-800">State</TableHead>
          </TableRow>
         </TableHeader>
         <TableBody>
          {postcodes.map((postcode, index) => (
           <TableRow
            key={postcode.code}
            className={`animate-fade-in-up animation-delay-${
             (index + 1) * 100
            } hover:bg-gray-50`}
           >
            <TableCell className="relative">
             <div className="flex items-center space-x-2">
              <span>{postcode.code}</span>
              <TooltipProvider>
               <Tooltip>
                <TooltipTrigger asChild>
                 <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 p-0"
                  onClick={() => handleCopyCell(postcode.code)}
                 >
                  {copiedCell === postcode.code ? (
                   <Check className="h-4 w-4" />
                  ) : (
                   <Copy className="h-4 w-4" />
                  )}
                 </Button>
                </TooltipTrigger>
                <TooltipContent>
                 <p>{copiedCell === postcode.code ? "Copied!" : "Copy code"}</p>
                </TooltipContent>
               </Tooltip>
              </TooltipProvider>
             </div>
            </TableCell>
            <TableCell className="relative">
             <div className="flex items-center space-x-2">
              <span>{postcode.region}</span>
              <TooltipProvider>
               <Tooltip>
                <TooltipTrigger asChild>
                 <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 p-0"
                  onClick={() => handleCopyCell(postcode.region)}
                 >
                  {copiedCell === postcode.region ? (
                   <Check className="h-4 w-4" />
                  ) : (
                   <Copy className="h-4 w-4" />
                  )}
                 </Button>
                </TooltipTrigger>
                <TooltipContent>
                 <p>
                  {copiedCell === postcode.region ? "Copied!" : "Copy state"}
                 </p>
                </TooltipContent>
               </Tooltip>
              </TooltipProvider>
             </div>
            </TableCell>
           </TableRow>
          ))}
         </TableBody>
        </Table>
       </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
       <div
        className="space-y-4 overflow-y-auto"
        style={{ maxHeight: "480px" }}
       >
        {postcodes.map((postcode, index) => (
         <div
          key={postcode.code}
          className={`bg-white p-4 rounded-lg shadow animate-fade-in-up animation-delay-${
           (index + 1) * 100
          } hover:bg-gray-50`}
         >
          <div className="flex justify-between items-center mb-2">
           <div className="flex items-center space-x-2">
            <span className="font-medium">Code:</span>
            <span>{postcode.code}</span>
            <TooltipProvider>
             <Tooltip>
              <TooltipTrigger asChild>
               <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0"
                onClick={() => handleCopyCell(postcode.code)}
               >
                {copiedCell === postcode.code ? (
                 <Check className="h-4 w-4" />
                ) : (
                 <Copy className="h-4 w-4" />
                )}
               </Button>
              </TooltipTrigger>
              <TooltipContent>
               <p>{copiedCell === postcode.code ? "Copied!" : "Copy code"}</p>
              </TooltipContent>
             </Tooltip>
            </TooltipProvider>
           </div>
          </div>
          <div className="flex justify-between items-center">
           <div className="flex items-center space-x-2">
            <span className="font-medium">State:</span>
            <span>{postcode.region}</span>
            <TooltipProvider>
             <Tooltip>
              <TooltipTrigger asChild>
               <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0"
                onClick={() => handleCopyCell(postcode.region)}
               >
                {copiedCell === postcode.region ? (
                 <Check className="h-4 w-4" />
                ) : (
                 <Copy className="h-4 w-4" />
                )}
               </Button>
              </TooltipTrigger>
              <TooltipContent>
               <p>
                {copiedCell === postcode.region ? "Copied!" : "Copy state"}
               </p>
              </TooltipContent>
             </Tooltip>
            </TooltipProvider>
           </div>
          </div>
         </div>
        ))}
       </div>
      </div>
     </CardContent>
    </Card>

    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600">
     <Button
      onClick={() => handleCopy("JSON")}
      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 transition-colors duration-300 hover:scale-105"
     >
      {copiedFormat === "JSON" ? <Check size={16} /> : <Copy size={16} />}
      <span>Copy as JSON</span>
     </Button>
     <Button
      onClick={() => handleCopy("CSV")}
      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-colors duration-300 hover:scale-105"
     >
      {copiedFormat === "CSV" ? <Check size={16} /> : <Copy size={16} />}
      <span>Copy as CSV</span>
     </Button>
    </div>
   </div>
  </div>
 );
}
