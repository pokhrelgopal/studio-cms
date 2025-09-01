import Link from "next/link";
import { ExternalLink } from "lucide-react";

const familyReportItems = [
  { id: 1, name: "Family Members", href: "#" },
  { id: 2, name: "Children Data", href: "#" },
  { id: 3, name: "Parental Info", href: "#" },
  { id: 4, name: "Contact Details", href: "#" },
  { id: 5, name: "Family History", href: "#" },
];

export default function FamilyReportList() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mt-6">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
        <h3 className="text-sm font-medium text-gray-900">Family Report</h3>
      </div>

      {/* Family Report List */}
      <div className="divide-y divide-gray-200">
        {familyReportItems.map((item) => (
          <div
            key={item.id}
            className="px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500 font-medium w-4">
                  {item.id}
                </span>
                <Link
                  href={item.href}
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center space-x-2 group"
                >
                  <span>{item.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
