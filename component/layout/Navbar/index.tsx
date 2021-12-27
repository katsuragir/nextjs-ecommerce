import Image from "next/image";
import Link from "next/link";
import LoginButton from "./loginButton";
import Menu from "./menu";
import ToggleMenu from "./toggleMenu";

export default function Navbar() {
  const lists = [
    { title: "Home", active: true, href: "/" },
    { title: "Games", active: false, href: "/games" },
    { title: "Reward", active: false, href: "/reward" },
    { title: "Discover", active: false, href: "/discover" },
    { title: "Global Rank", active: false, href: "/global-rank" },
  ];
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand" href="/#">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </Link>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              {lists.map((menu, index) => (
                <Menu
                  key={index}
                  title={menu.title}
                  active={menu.active}
                  href={menu.href}
                />
              ))}
              <LoginButton isLogin={false} />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
