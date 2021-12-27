import Menu from "./menu";

export default function Support() {
  const lists = [
    { title: "Refund Policy", href: "/refund-policy" },
    { title: "Unlock Rewards", href: "/unlock-rewards" },
    { title: "Live Chatting", href: "/live-chatting" },
  ];
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
      <ul className="list-unstyled">
        {lists.map((menu, index) => (
          <Menu key={index} title={menu.title} href={menu.href} />
        ))}
      </ul>
    </div>
  );
}
