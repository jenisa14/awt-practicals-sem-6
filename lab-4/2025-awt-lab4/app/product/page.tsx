import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div>
      <h1>Our Products</h1>
      <p className="mb-4">Explore our popular product collection.</p>

      <div className="row">

        {/* MOBILE */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <Image src="/products/mobile.jpg" alt="Mobile"
              width={400} height={250} className="card-img-top" />
            <div className="card-body">
              <h5>Mobile Phones</h5>
              <p>Top quality smartphones with best features.</p>
              <Link href="/product/page1" className="btn btn-dark">View More</Link>
            </div>
          </div>
        </div>

        {/* LAPTOP */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <Image src="/products/laptop.jpg" alt="Laptop"
              width={400} height={250} className="card-img-top" />
            <div className="card-body">
              <h5>Laptops</h5>
              <p>High-performance laptops for work & gaming.</p>
              <button className="btn btn-secondary" disabled>Coming Soon</button>
            </div>
          </div>
        </div>

        {/* HEADPHONES */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <Image src="/products/headphone.jpg" alt="Headphones"
              width={400} height={250} className="card-img-top" />
            <div className="card-body">
              <h5>Headphones</h5>
              <p>Experience amazing sound quality.</p>
              <button className="btn btn-secondary" disabled>Coming Soon</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
