import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

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
