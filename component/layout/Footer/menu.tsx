import Link from "next/link";
import MenuFooterProps from "../../schema/MenuFooterProps";

export default function Menu(props: MenuFooterProps) {
  const { title, href } = props;
  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}
