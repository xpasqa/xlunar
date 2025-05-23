import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <h1 className="text-xl font-bold">Lunar</h1>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </nav>

      {/* Hero */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Sistem HR Modern</h2>
        <p className="text-lg text-gray-600 mb-6">
          Kelola tim kamu dengan lebih efisien dan otomatis.
        </p>
        <Link href="/login">
          <Button size="lg">Coba Sekarang</Button>
        </Link>
      </section>

      {/* Intro Text */}
      <section className="px-6 py-12 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-700">
          Lunar membantu bisnis kecil hingga besar mengelola karyawan, absensi, dan produktivitas dengan lebih mudah.
        </p>
      </section>

      {/* Fitur */}
      <section className="px-6 py-12 bg-white">
        <h3 className="text-2xl font-bold mb-8 text-center">Fitur Unggulan</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Card>
            <CardContent className="pt-6">
              <Badge variant="outline" className="mb-2">Real-time</Badge>
              <h4 className="font-semibold mb-2">Absensi Online</h4>
              <p className="text-sm text-gray-600">Tracking kehadiran real-time.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Badge variant="outline" className="mb-2">Fleksibel</Badge>
              <h4 className="font-semibold mb-2">Manajemen Cuti</h4>
              <p className="text-sm text-gray-600">Ajukan dan setujui cuti secara digital.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Badge variant="outline" className="mb-2">Analitik</Badge>
              <h4 className="font-semibold mb-2">Laporan Kinerja</h4>
              <p className="text-sm text-gray-600">Data performa otomatis dan transparan.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-12 bg-gray-100">
        <h3 className="text-2xl font-bold mb-8 text-center">Paket Harga</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold text-lg mb-2">Basic</h4>
              <p className="text-gray-700 mb-4">Rp0/bulan</p>
              <p className="text-sm text-gray-600">Untuk tim kecil</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold text-lg mb-2">Pro</h4>
              <p className="text-gray-700 mb-4">Rp99.000/bulan</p>
              <p className="text-sm text-gray-600">Semua fitur dasar + laporan</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h4 className="font-semibold text-lg mb-2">Enterprise</h4>
              <p className="text-gray-700 mb-4">Custom</p>
              <p className="text-sm text-gray-600">Integrasi sistem dan support khusus</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-white">
        <h3 className="text-3xl font-bold mb-4">Mulai Kelola Tim Kamu Sekarang</h3>
        <Link href="/login">
          <Button size="lg">Daftar Sekarang</Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lunar HR System. All rights reserved.
      </footer>
    </main>
  );
}
