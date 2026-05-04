// Route group layout for admin pages — wraps all (admin)/* routes
// Renders the Admin Sidebar + Topbar around page content
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
