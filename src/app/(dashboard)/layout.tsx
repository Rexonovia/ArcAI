import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="flex-1 md:ml-64 pt-[72px] min-h-screen">
        {children}
      </main>
    </div>
  );
}
