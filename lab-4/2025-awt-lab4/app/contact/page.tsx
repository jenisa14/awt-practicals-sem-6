export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <p className="mt-3">Company Address: Rajkot, Gujarat, India</p>
      <p>Phone: <b>+91 12345 67890</b></p>
      <p>Email: myproduct@gmail.com</p>

      <h4 className="mt-4">Send a Message</h4>
      <input className="form-control mb-2" type="text" placeholder="Your Name" />
      <input className="form-control mb-2" type="email" placeholder="Your Email" />
      <textarea className="form-control mb-2" placeholder="Message"></textarea>

      <button className="btn btn-primary mt-2">Submit</button>
    </div>
  );
}
