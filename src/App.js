import { Bell } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    title: "Client Gallery",
    icon: "🟢",
    items: ["New Collection", "Manage Collection", "View Homepage", "Feedbacks"],
  },
  {
    title: "Enquiry",
    icon: "🟠",
    items: ["View Order", "View Client Activities"],
  },
  {
    title: "Accounts",
    icon: "🔴",
    items: ["Invoices", "View Payments"],
  },
  {
    title: "Settings",
    icon: "🟢",
    items: ["Bank Account Details", "Google Drive Integration Settings", "Social Media Settings"],
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">LOVETODES</h1>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-500" />
            <Avatar>
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-sm text-gray-500 uppercase mb-8">PRODUCTS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.title}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">{product.icon}</span>
                  <span>{product.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}