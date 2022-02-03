import Footer from "./footer";
import Menu from "./menu";
import Profile from "./profile";

export default function SidebarMember() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <Menu title="Overview" icon="ic-menu-transactions" active />
          <Menu title="Transactions" icon="ic-menu-transactions" />
          <Menu title="Messages" icon="ic-menu-messages" />
          <Menu title="Card" icon="ic-menu-card" />
          <Menu title="Rewards" icon="ic-menu-rewards" />
          <Menu title="Settings" icon="ic-menu-settings" />
          <Menu title="Log Out" icon="ic-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
