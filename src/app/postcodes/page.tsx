'use client'

import { useState } from 'react'
import { usePostcodes } from '../../hooks/usePostcodes'
import { copyAsJSON, copyAsCSV } from '../../utils/copyUtils'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Copy } from 'lucide-react'

export default function PostcodesPage() {
  const { postcodes, regions, selectedRegion, setSelectedRegion } = usePostcodes()
  const [copiedFormat, setCopiedFormat] = useState<'JSON' | 'CSV' | null>(null)

  const handleCopy = (format: 'JSON' | 'CSV') => {
    if (format === 'JSON') {
      copyAsJSON(postcodes)
    } else {
      copyAsCSV(postcodes)
    }
    setCopiedFormat(format)
    setTimeout(() => setCopiedFormat(null), 2000)
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Nigeria Postcodes</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filter by Region</CardTitle>
        </CardHeader>
        <CardContent>
          <Select 
            value={selectedRegion || 'all'} 
            onValueChange={(value) => setSelectedRegion(value === 'all' ? null : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>{region}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Postcodes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Area</TableHead>
                <TableHead>Region</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {postcodes.map((postcode) => (
                <TableRow key={postcode.code}>
                  <TableCell>{postcode.code}</TableCell>
                  <TableCell>{postcode.area}</TableCell>
                  <TableCell>{postcode.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button
          onClick={() => handleCopy('JSON')}
          className="flex items-center space-x-2"
        >
          {copiedFormat === 'JSON' ? <Check size={16} /> : <Copy size={16} />}
          <span>Copy as JSON</span>
        </Button>
        <Button
          onClick={() => handleCopy('CSV')}
          className="flex items-center space-x-2"
        >
          {copiedFormat === 'CSV' ? <Check size={16} /> : <Copy size={16} />}
          <span>Copy as CSV</span>
        </Button>
      </div>
    </div>
  )
}

