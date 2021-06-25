import { Navbar, Footer } from "./components";
import { history } from "../../utils";

function PublicLayout(props) {
  const { children, withFooter = true } = props;
  return (
    <div className="">
      <div className="z-30" style={{ paddingBottom: "4rem" }}>
        <Navbar />
      </div>
      <div className="p-0">{children}</div>
      <div>{withFooter && <Footer />}</div>
    </div>
  );
}

export default PublicLayout;
