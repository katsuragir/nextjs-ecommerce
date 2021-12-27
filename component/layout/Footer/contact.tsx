import Menu from "./menu";

export default function Contact() {
  const lists = [
    { title: "hi@store.gg", href: "mailto: hi@store.gg" },
    { title: "team@store.gg", href: "mailto: team@store.gg" },
    {
      title: "Pasific 12, Jakarta Selatan",
      href: "http://maps.google.com/?q=Pasific 12",
    },
    { title: "021 - 1122 - 9090", href: "tel: 02111229090" },
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
