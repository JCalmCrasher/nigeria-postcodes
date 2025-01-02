import { Search, Map, Copy, Code } from "lucide-react";

const features = [
 {
  name: "Easy Search",
  description: "Quickly find postcodes for any area in Nigeria.",
  icon: Search,
  status: "available"
 },
 {
  name: "Copy Functionality",
  description: "Easily copy results in JSON or CSV format.",
  icon: Copy,
  status: "available"
 },
 {
  name: "Regional Filtering",
  description: "Filter postcodes by region for more specific results.",
  icon: Map,
  status: "coming-soon"
 },
 {
  name: "API Access",
  description: "Integrate postcode data directly into your applications.",
  icon: Code,
  status: "coming-soon"
 }
];

export function Features() {
 return (
  <div className="py-20 sm:py-16 bg-gradient-to-b from-green-50 to-white">
   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
     <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-green-700 via-green-600 to-green-800 bg-clip-text text-transparent sm:text-4xl animate-fade-in-up animation-delay-300">
      Everything you need for postcode lookup
     </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
     <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
      {features.map((feature, index) => (
       <div
        key={feature.name}
        className={`flex flex-col animate-fade-in-up animation-delay-${
         (index + 1) * 300
        }`}
       >
        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
         <div
          className={`rounded-lg p-2 ring-2 ring-white ${
           feature.status === "coming-soon" ? "bg-gray-400" : "bg-green-700"
          }`}
         >
          <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
         </div>
         <div className="flex items-center gap-2">
          {feature.name}
          {feature.status === "coming-soon" && (
           <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
            Coming soon
           </span>
          )}
         </div>
        </dt>
        <dd
         className={`mt-4 flex flex-auto flex-col text-base leading-7 ${
          feature.status === "coming-soon" ? "text-gray-500" : "text-gray-600"
         }`}
        >
         <p className="flex-auto">{feature.description}</p>
        </dd>
       </div>
      ))}
     </dl>
    </div>
   </div>
  </div>
 );
}
