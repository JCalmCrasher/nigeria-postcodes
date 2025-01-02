import { useState, useMemo } from "react";

const POSTCODES = [
 { code: "440001", region: "Abia" },
 { code: "640001", region: "Adamawa" },
 { code: "520001", region: "Akwa Ibom" },
 { code: "420001", region: "Anambra" },
 { code: "740001", region: "Bauchi" },
 { code: "561001", region: "Bayelsa" },
 { code: "970001", region: "Benue" },
 { code: "600001", region: "Borno" },
 { code: "540001", region: "Cross River" },
 { code: "320001", region: "Delta" },
 { code: "840001", region: "Ebonyi" },
 { code: "300001", region: "Edo" },
 { code: "360001", region: "Ekiti" },
 { code: "400001", region: "Enugu" },
 { code: "760001", region: "Gombe" },
 { code: "460001", region: "Imo" },
 { code: "720001", region: "Jigawa" },
 { code: "700001", region: "Kaduna" },
 { code: "800001", region: "Kano" },
 { code: "820001", region: "Katsina" },
 { code: "860001", region: "Kebbi" },
 { code: "260001", region: "Kogi" },
 { code: "240001", region: "Kwara" },
 { code: "100001", region: "Lagos" },
 { code: "962001", region: "Nasarawa" },
 { code: "920001", region: "Niger" },
 { code: "110001", region: "Ogun" },
 { code: "340001", region: "Ondo" },
 { code: "230001", region: "Osun" },
 { code: "200001", region: "Oyo" },
 { code: "930001", region: "Plateau" },
 { code: "500001", region: "Rivers" },
 { code: "840101", region: "Sokoto" },
 { code: "660001", region: "Taraba" },
 { code: "620001", region: "Yobe" },
 { code: "880001", region: "Zamfara" },
 { code: "900001", region: "Federal Capital Territory" }
];

const REGIONS = Array.from(new Set(POSTCODES.map((pc) => pc.region)));

export function usePostcodes() {
 const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

 const filteredPostcodes = useMemo(() => {
  if (!selectedRegion) return POSTCODES;
  return POSTCODES.filter((pc) => pc.region === selectedRegion);
 }, [selectedRegion]);

 return {
  postcodes: filteredPostcodes,
  regions: REGIONS,
  selectedRegion,
  setSelectedRegion
 };
}
