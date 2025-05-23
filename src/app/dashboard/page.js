import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Lunar Admin</h2>
        <nav className="flex flex-col gap-4 text-sm">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          </Link>
          <Link href="/dashboard/artikel">
            <Button variant="ghost" className="w-full justify-start">Artikel</Button>
          </Link>
          <Link href="/dashboard/artikel/new">
            <Button variant="ghost" className="w-full justify-start">Tambah Artikel</Button>
          </Link>
          <Link href="/dashboard/pengguna">
            <Button variant="ghost" className="w-full justify-start">Pengguna</Button>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
}
