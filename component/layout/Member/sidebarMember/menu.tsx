import cx from "classnames";
import Image from "next/image";

interface MenuSidebarMemberProps {
  title: string;
  icon: string;
  active?: boolean;
}

export default function Menu(props: Partial<MenuSidebarMemberProps>) {
  const { title, icon, active } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          width={25}
          height={25}
          alt="menu-overview"
        />
      </div>

      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
