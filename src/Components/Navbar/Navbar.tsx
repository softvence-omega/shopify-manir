import MorphingNavigation, { MorphingNavigationLink } from "./MorphingNav";

const Navbar = () => {
  const navigationLinks: MorphingNavigationLink[] = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Us", href: "#about" },
    { id: "team", label: "Our Team", href: "#team" },
    { id: "services", label: "Services", href: "#services" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  ];

  return (
    <div className="relative">
      <div className="">
        <MorphingNavigation links={navigationLinks} />
      </div>
    </div>
  );
};

export default Navbar;
