import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const HomeLayout = () => {
  return (
      <div>
          <header>
             <Header></Header> 
          </header>
      <Nav></Nav>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
