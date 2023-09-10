import { React } from "react";
import Logo from "./Images/Online-shopping-logo-design-template-on-transparent-background-PNG.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="bg-white relative">
        <div>
          <nav className="bg-[#241468]  max-h-20 flex justify-evenly select-none text-white flex-shrink-0">
            <div className="flex items-center justify-center space-x-10 ">
              <div className="flex items-center">
                <img src={Logo} className="w-20" alt="text" />
                <h2 className="uppercase font-medium text-lg">Shopify</h2>
              </div>
              <div>
                <input
                  type="text"
                  className="h-12 rounded-2xl bg-transparent border-2  w-[30rem] pl-7 focus:outline-none text-xl placeholder:text-cyan-600 border-cyan-400 focus:shadow-2xl shadow-cyan-500"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="flex items-center  space-x-16 flex-shrink-0">
              <div>
                <Link to="/home">
                  {" "}
                  <h5>Home</h5>
                </Link>
              </div>
              <div>
                <h5>Offer</h5>
              </div>
              <div className=" w-[100px]  relative inline-block cursor-pointer">
                <h5>Categories</h5>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
