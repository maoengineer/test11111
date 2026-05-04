// Route group layout for public pages — wraps all (public)/* routes
// Renders the public Navbar and Footer around page content
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
