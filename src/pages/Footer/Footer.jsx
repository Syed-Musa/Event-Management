const Footer = () => {
  return (
    <footer className="footer p-10 bg-blue-100 my-6 text-base-content">
      <h2 className="text-5xl font-bold my-5">HealthCare</h2>
      <nav>
        <header className="footer-title text-2xl">Services</header>
        <a className="link link-hover text-xl font-bold">Primary Care Services</a>
        <a className="link link-hover text-xl font-bold">Speciality Care Services</a>
        <a className="link link-hover text-xl font-bold">Emergency Care</a>
        <a className="link link-hover text-xl font-bold">Yoga and Wellness</a>
      </nav>
      <nav>
        <header className="footer-title text-2xl">Company</header>
        <a className="link link-hover text-xl font-bold">About us</a>
        <a className="link link-hover text-xl font-bold">Contact</a>
        <a className="link link-hover text-xl font-bold">Jobs</a>
        <a className="link link-hover text-xl font-bold">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title text-2xl">Legal</header>
        <a className="link link-hover text-xl font-bold">Terms of use</a>
        <a className="link link-hover text-xl font-bold">Privacy policy</a>
        <a className="link link-hover text-xl font-bold">Services policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
