export function copyAsJSON(data: any) {
  const jsonString = JSON.stringify(data, null, 2)
  navigator.clipboard.writeText(jsonString)
}

export function copyAsCSV(data: any[]) {
  const headers = Object.keys(data[0]).join(',')
  const rows = data.map(obj => Object.values(obj).join(','))
  const csvString = [headers, ...rows].join('\n')
  navigator.clipboard.writeText(csvString)
}

