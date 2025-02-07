import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/Logo/LOGO_IT_SERVICES_TRANSPARENT.png"
import FT_Logo from "../../assets/Logo/FT_LOGO_EMINENCE_TRANSPARENT.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

export function Navbar({ brandName, routes, action }) {
  const [hoveredMenu, setHoveredMenu] = React.useState(null);
  const [openSubMenu, setOpenSubMenu] = React.useState(null);

  const handleMouseEnter = (menuName) => {
    setHoveredMenu(menuName);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };
  const [openNav, setOpenNav] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);

  const handleSubMenuToggle = (menuName) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName); // Toggle submenu visibility
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  // Split routes into visible and dropdown items
  const visibleRoutes = routes.slice(0, 3); // Show only the first 3 items
  const dropdownRoutes = routes.slice(3); // Remaining items go to dropdown

  const navListDesk = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {visibleRoutes.map(({ name, path, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >

              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold hover:text-dark-blue text-lg"
            >
              {name}
            </Link>
          )}
        </Typography>
      ))}
      {dropdownRoutes.length > 0 && (
        <Menu open={openMenu} handler={setOpenMenu}>
          <MenuHandler>
            <Typography
              as="li"
              variant="small"
              color="inherit"
              className="capitalize cursor-pointer p-1 font-bold hover:text-dark-blue flex items-center gap-1 text-lg"
            >
              More <MdKeyboardArrowDown className="text-xl" />
            </Typography>
          </MenuHandler>
          <MenuList className="w-auto">
            {dropdownRoutes.map(({ name, path, href, target }) => (
              <Link key={name} className="flex py-2 hover:bg-gray-100 px-2 rounded-lg"
                to={path}
              >
                {href ? (
                  <a
                    href={href}
                    target={target}
                    className="text-black font-bold hover:text-dark-blue text-lg"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    to={path}
                    target={target}
                    className="text-black font-bold hover:text-dark-blue text-lg"
                  >
                    {name}
                  </Link>
                )}
              </Link>
            ))}
          </MenuList>
        </Menu>
      )}
    </ul>
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
      {routes.map(({ name, path, href, target, submenu }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize relative font-Signika" // Add relative positioning for the parent
          onMouseEnter={() => handleMouseEnter(name)}
          onMouseLeave={handleMouseLeave}
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {name}
            </a>
          ) : (
            <div className="flex items-center">
              <Link
                to={path}
                target={target}
                className="flex items-center gap-1 p-1 font-normal text-black hover:text-dark-blue lg:text-lg"
              >
                {name}
              </Link>
              {submenu && (
                <MdKeyboardArrowDown className="text-xl text-black" />
              )}
              {hoveredMenu === name && submenu && (
                <ul className="absolute top-full mt-0 left-0 w-auto rounded-lg bg-white shadow-lg z-10">
                  {submenu.map((item) => (
                    <li key={item.name} className="px-4 py-2 hover:bg-gray-100 md:whitespace-nowrap">
                      <HashLink
                        to={item.path}
                        className="text-black font-semibold hover:text-dark-blue"
                        // onClick={() => setHoveredMenu(null)}
                        // onClick={() => setOpenNav(false)}
                        
                      >
                        {item.name}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </Typography>
      ))}
    </ul>
  );


  return (
    <div color="transparent" className="lg:p-3 py-3 bg-white text-white px-0">
      <div className=" flex items-center justify-between lg:gap-32 md:gap-2 gap-0 px-4">
        {/*
        <div className="hidden lg:block w-2/12"></div>
        */}
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {/*
            {brandName}
            <img src={Logo} alt="Logo" className="h-14" />
            */}
            <img src={FT_Logo} alt="Logo" className=" h-20" />
          </Typography>
        </Link>

        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          size="sm"
          color="black"
          className="ml-auto text-inherit  focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} color="black" className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} color="black" className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      {openNav && (
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          {navList}
        </div>
      )}
      {/*
        <MobileNav
          className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
          open={openNav}
        >
          <div className="container mx-auto">
            {navList}
            <a
              href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
              target="_blank"
              className="mb-2 block hover:text-dark-blue"
            >
            </a>
           
          </div>
        </MobileNav>
      */}
    </div>
  );
}

Navbar.defaultProps = {
  brandName: "Logo",
  action: (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-kit-react"
      target="_blank"
    >
      {/*
      <Button variant="gradient" size="sm" fullWidth>
        free download
      </Button>
       */}
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
