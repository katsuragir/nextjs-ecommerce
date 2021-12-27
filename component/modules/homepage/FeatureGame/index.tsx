import GameItem from "../../../shared/GameItem";

export default function FeatureGame() {
  const lists = [
    {
      title: "Super Mechs",
      category: "Mobile",
      href: "/detail",
      thumbnail: "Thumbnail-1",
    },
    {
      title: "Call of Duty: Modern",
      category: "Mobile",
      href: "/detail",
      thumbnail: "Thumbnail-2",
    },
    {
      title: "Mobile Legends",
      category: "Mobile",
      href: "/detail",
      thumbnail: "Thumbnail-3",
    },
    {
      title: "Clash of Clans",
      category: "Mobile",
      href: "/detail",
      thumbnail: "Thumbnail-4",
    },
    {
      title: "Valorant",
      category: "Desktop",
      href: "/detail",
      thumbnail: "Thumbnail-5",
    },
  ];
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {lists.map((game, index) => (
            <GameItem
              key={index}
              title={game.title}
              category={game.category}
              href={game.href}
              thumbnail={game.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
