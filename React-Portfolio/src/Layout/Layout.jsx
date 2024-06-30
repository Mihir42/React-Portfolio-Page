import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";
import "./Layout.scss";

function Layout(props) {
  return (
    <div className="centerpane">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
