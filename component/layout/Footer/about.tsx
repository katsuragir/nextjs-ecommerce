import Menu from "./menu";

export default function About() {
  const lists = [
    { title: "About Us", href: "/about-us" },
    { title: "Press Release", href: "/press-release" },
    { title: "Terms of Use", href: "terms-of-use" },
    { title: "Privacy & Policy", href: "privacy-policy" },
  ];
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
      <ul className="list-unstyled">
        {lists.map((menu, index) => (
          <Menu key={index} title={menu.title} href={menu.href} />
        ))}
      </ul>
    </div>
  );
}
