import Footer from "../components/Footer";
import Header from "../components/Header";
import Latest from "../components/Latest";
import Nav from "../components/Nav";

const HomeLayout = () => {
  return (
      <div>
          <header>
              <Header></Header> 
              <Latest></Latest>
          </header>
      <Nav></Nav>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
