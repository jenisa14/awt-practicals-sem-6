"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">

      <div
        className="p-5 text-white rounded shadow"
        style={{ background: "linear-gradient(135deg,#9b59b6,#3498db)" }}
      >
        <h1>Welcome to Our Website</h1>
        <p className="mt-3 fs-5">
          Discover amazing products and learn more about us.
        </p>

        <Link href="/product" className="btn btn-light mt-3">
          Explore Products
        </Link>
      </div>

      {/* FEATURE CARDS */}
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="p-4 bg-white shadow-sm rounded">
            <h4>Quality</h4>
            <p>We offer premium quality products.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 bg-white shadow-sm rounded">
            <h4>Support</h4>
            <p>Always available to help you.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 bg-white shadow-sm rounded">
            <h4>Trust</h4>
            <p>Trusted by thousands of buyers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
