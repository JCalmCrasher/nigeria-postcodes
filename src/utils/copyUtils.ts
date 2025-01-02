interface Postcode {
 code: string;
 area: string;
 region: string;
}

type JsonSerializable =
 | Postcode[]
 | Record<string, string | number | boolean | null>;

export function copyAsJSON(data: JsonSerializable) {
 const jsonString = JSON.stringify(data, null, 2);
 navigator.clipboard.writeText(jsonString);
}

export function copyAsCSV(data: Postcode[]) {
 const headers = Object.keys(data[0]).join(",");
 const rows = data.map((obj) => Object.values(obj).join(","));
 const csvString = [headers, ...rows].join("\n");
 navigator.clipboard.writeText(csvString);
}
