import Footer from "./footer";
import Nav from "./nav";
import Logo from "./logo";

export default function Sidebar() {
  return (
    <>
      <aside className="w-72 text-white flex flex-col rounded-md shadow-lg mr-4 bg-[#11111D]">
        <Logo />
        <Nav />
        <Footer />
      </aside>
    </>
  );
}
