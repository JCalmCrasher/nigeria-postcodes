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

   <div className="container mx-auto p-4 max-w-4xl">
    <Card
     id="postcodes-table"
     className="mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up overflow-hidden scroll-mt-16"
    >
     <CardHeader className="bg-gradient-to-r from-green-700 to-green-800 text-white">
      <CardTitle className="text-2xl font-bold">Find Postcodes</CardTitle>
     </CardHeader>
     <CardContent className="p-6">
      <div className="mb-6">
       <label
        htmlFor="region-select"
        className="block text-sm font-medium text-gray-700 mb-2"
       >
        Select Region
       </label>
       <Select
        value={selectedRegion || "all"}
        onValueChange={(value) =>
         setSelectedRegion(value === "all" ? null : value)
        }
       >
        <SelectTrigger
         id="region-select"
         className="w-full md:w-[200px] bg-white"
        >
         <SelectValue placeholder="Select a region" />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="all">All Regions</SelectItem>
         {regions.map((region) => (
          <SelectItem key={region} value={region}>
           {region}
          </SelectItem>
         ))}
        </SelectContent>
       </Select>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
       <Table>
        <TableHeader>
         <TableRow className="bg-gradient-to-r from-green-50 to-green-100">
          <TableHead className="font-bold text-green-800">Code</TableHead>
          <TableHead className="font-bold text-green-800">Area</TableHead>
          <TableHead className="font-bold text-green-800">Region</TableHead>
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
             <span>{postcode.area}</span>
             <TooltipProvider>
              <Tooltip>
               <TooltipTrigger asChild>
                <Button
                 variant="ghost"
                 size="icon"
                 className="h-8 w-8 p-0"
                 onClick={() => handleCopyCell(postcode.area)}
                >
                 {copiedCell === postcode.area ? (
                  <Check className="h-4 w-4" />
                 ) : (
                  <Copy className="h-4 w-4" />
                 )}
                </Button>
               </TooltipTrigger>
               <TooltipContent>
                <p>{copiedCell === postcode.area ? "Copied!" : "Copy area"}</p>
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
                 {copiedCell === postcode.region ? "Copied!" : "Copy region"}
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
