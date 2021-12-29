import Menu from "./menu";

export default function Contact() {
  const lists = [
    { title: "Katsuragi R", href: "https://github.com/katsuragir" },
    {
      title: "Ridhliver Software",
      href: "https://goo.gl/maps/B7mgr5a5Gwg5uVNU7",
    },
    { title: "0821 - 2412 - 5844", href: "tel: +6282124125844" },
  ];
  return (
    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
      <ul className="list-unstyled">
        {lists.map((menu, index) => (
          <Menu key={index} title={menu.title} href={menu.href} />
        ))}
      </ul>
    </div>
  );
}
