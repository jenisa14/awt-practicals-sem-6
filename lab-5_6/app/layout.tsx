import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata: Metadata = {
  title: "Lab 5 & 6 NextJS",
  description: "Basic Routing and Styling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
          <h3 className="text-white">NextJS App</h3>
          <nav className="ms-auto">
            <Link className="btn btn-outline-light me-2" href="/">Home</Link>
            <Link className="btn btn-outline-light me-2" href="/about">About</Link>
            <Link className="btn btn-outline-light" href="/contact">Contact</Link>
          </nav>
        </header>


        {/* Page Content */}
      <main className="container my-4">{children}</main>


        {/* Footer */}
          <footer className="bg-dark text-white text-center p-3">
            © 2025 NextJS Lab
          </footer>
      </body>
    </html>
  );
}
