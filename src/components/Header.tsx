import logo from "../assets/images/SkillBridgeLogo.png";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="px-4 flex justify-between items-center bg-secondary-background md:px-12 xl:px-20">
      <div>
        <img
          src={logo}
          className="w-32 h-8 lg:w-42 lg:h-auto"
          alt="SkillBridge"
        />
      </div>
      <div>
        <nav>
          <ul className="flex gap-3 items-center text-sm md:gap-8 lg:gap-12 lg:text-[1.125rem]">
            <li className="py-4 border-b-2 border-primary">
              <Link to="/" className="text-primary">
                Discover
              </Link>
            </li>
            <li className="py-4">
              <Link className="medium" to="/saved">
                Saved{" "}
                <span className="bg-main-background px-2.5 py-1 rounded-lg font-semibold text-xs">
                  12
                </span>
              </Link>
            </li>
            <li className="py-4">
              <Link to="#">
                <span className="w-8 h-8 bg-primary flex justify-center items-center rounded-full">
                  <User className="text-white rounded-full" size={18} />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
