import { DataTable } from "./components/data-table"

const visits = [
  {
    id: "1",
    ip: "192.168.1.1",
    deviceType: "Desktop",
    os: "Windows",
    browser: "Chrome",
    date: "2023-05-20 14:30",
    details: "5 pages visitées, 2 téléchargements effectués",
  },
  // ... add more entries here
]

export default function Page() {
  return (
    <div className="container mx-auto py-10">
      <DataTable data={visits} />
    </div>
  )
}