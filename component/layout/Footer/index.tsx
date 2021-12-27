import Image from "next/image";
import Link from "next/link";
import About from "./about";
import Contact from "./contact";
import FooterDetail from "./detail";
import Support from "./support";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/">
                <a className="mb-30">
                  <Image src="/icon/logo.svg" width={60} height={60} />
                </a>
              </Link>
              <FooterDetail />
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <About />
                <Support />
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
