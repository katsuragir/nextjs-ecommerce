import Overview from "../../component/layout/Member/overview";
import SidebarMember from "../../component/layout/Member/sidebarMember";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SidebarMember />
      <Overview />
    </section>
  );
}
