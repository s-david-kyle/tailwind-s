import ShoppingButton from "./navComponents/ShoppingButton";
import Logo from "./navComponents/Logo";
import Navigation from "./navComponents/Navigation";

const routes = ["Home", "About", "Services", "Pricing", "Contact"];

const Nav = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center">
      <Logo />
      <Navigation routes={routes} />
      <ShoppingButton />
    </nav>
  );
};

export default Nav;
