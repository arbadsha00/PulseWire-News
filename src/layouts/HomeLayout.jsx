import { Outlet } from "react-router-dom";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Nav from "../components/Nav";
import RightSide from "../components/RightSide";
const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <Latest></Latest>
      </header>
      <Nav></Nav>

      <section className="container mx-auto w-11/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6">
        <aside>
          <Category></Category>
        </aside>
        <section className="md:col-span-2">
          <Outlet></Outlet>
        </section>
        <aside>
        <RightSide></RightSide>
        </aside>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
