import { useState, useMemo } from 'react'

const POSTCODES = [
  { code: '100001', area: 'Ikeja', region: 'Lagos' },
  { code: '200001', area: 'Kano Municipal', region: 'Kano' },
  { code: '300001', area: 'Port Harcourt', region: 'Rivers' },
  { code: '400001', area: 'Kaduna North', region: 'Kaduna' },
  { code: '500001', area: 'Enugu North', region: 'Enugu' },
  // Add more postcodes as needed
]

const REGIONS = Array.from(new Set(POSTCODES.map(pc => pc.region)))

export function usePostcodes() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const filteredPostcodes = useMemo(() => {
    if (!selectedRegion) return POSTCODES
    return POSTCODES.filter(pc => pc.region === selectedRegion)
  }, [selectedRegion])

  return {
    postcodes: filteredPostcodes,
    regions: REGIONS,
    selectedRegion,
    setSelectedRegion,
  }
}

