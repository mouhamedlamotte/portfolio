import { Visit, visitColumns } from "./components/columns";
import { DataTable } from "./components/data-table"

export const visits :Visit[] = [
  {
    ipAddress: "192.168.1.1",
    deviceType: "Desktop",
    os: "Windows 11",
    browser: "Google Chrome",
    visitDate: "2024-12-02T10:15:30Z",
    isBot: false,
    source: "Google",
    visitedPages: { url: "/home" },
    downloads: { downloadedItem: "file1.pdf" },
  },
  {
    ipAddress: "203.0.113.45",
    deviceType: "Mobile",
    os: "iOS 17",
    browser: "Safari",
    visitDate: "2024-12-01T16:45:12Z",
    isBot: false,
    source: "Direct",
    visitedPages: { url: "/about" },
    downloads: { downloadedItem: "" },
  },
  {
    ipAddress: "198.51.100.7",
    deviceType: "Tablet",
    os: "Android 13",
    browser: "Samsung Internet",
    visitDate: "2024-11-30T12:05:00Z",
    isBot: true,
    source: "Bing",
    visitedPages: { url: "/contact" },
    downloads: { downloadedItem: "report.xlsx" },
  },
  {
    ipAddress: "192.0.2.36",
    deviceType: "Desktop",
    os: "macOS Sonoma",
    browser: "Mozilla Firefox",
    visitDate: "2024-11-28T08:22:14Z",
    isBot: false,
    source: "Newsletter",
    visitedPages: { url: "/blog/post-1" },
    downloads: { downloadedItem: "image1.jpg" },
  },
  {
    ipAddress: "172.16.0.14",
    deviceType: "Mobile",
    os: "Android 14",
    browser: "Brave",
    visitDate: "2024-12-02T14:30:45Z",
    isBot: false,
    source: "Facebook",
    visitedPages: { url: "/services" },
    downloads: { downloadedItem: "" },
  },
  {
    ipAddress: "10.0.0.1",
    deviceType: "Desktop",
    os: "Linux",
    browser: "Opera",
    visitDate: "2024-11-27T20:55:10Z",
    isBot: true,
    source: "LinkedIn",
    visitedPages: { url: "/pricing" },
    downloads: { downloadedItem: "" },
  },
  {
    ipAddress: "172.217.14.78",
    deviceType: "Tablet",
    os: "iPadOS 17",
    browser: "Safari",
    visitDate: "2024-11-29T11:10:30Z",
    isBot: false,
    source: "Twitter",
    visitedPages: { url: "/features" },
    downloads: { downloadedItem: "ebook.epub" },
  },
  {
    ipAddress: "203.113.5.22",
    deviceType: "Mobile",
    os: "iOS 16",
    browser: "DuckDuckGo",
    visitDate: "2024-12-01T09:12:00Z",
    isBot: false,
    source: "Google Ads",
    visitedPages: { url: "/testimonials" },
    downloads: { downloadedItem: "" },
  },
  {
    ipAddress: "198.18.0.101",
    deviceType: "Desktop",
    os: "Windows 10",
    browser: "Microsoft Edge",
    visitDate: "2024-12-02T06:45:30Z",
    isBot: false,
    source: "Reddit",
    visitedPages: { url: "/faq" },
    downloads: { downloadedItem: "manual.docx" },
  },
  {
    ipAddress: "203.0.113.200",
    deviceType: "Tablet",
    os: "Android 12",
    browser: "Kiwi Browser",
    visitDate: "2024-11-30T18:30:50Z",
    isBot: false,
    source: "Instagram",
    visitedPages: { url: "/support" },
    downloads: { downloadedItem: "" },
  }
];


export default function Page() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={visitColumns} data={visits} />
    </div>
  )
}