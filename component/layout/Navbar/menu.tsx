import cx from "classnames";
import Link from "next/link";
import MenuNavbarProps from "../../schema/MenuNavbarProps";

export default function Menu(props: Partial<MenuNavbarProps>) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
