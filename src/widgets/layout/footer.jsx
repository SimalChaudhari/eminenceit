import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import FT_Logo from "../../assets/Logo/FT_LOGO_EMINENCE_TRANSPARENT.png"
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-custome-blue">
      <div className="md:container md:mx-auto">
        <div className="flex flex-wrap pt-6 lg:text-left">
          <div className="w-full px-4 md:w-2/6">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {/*
              {title}
              */}

              <img src={FT_Logo} alt="FT_Logo" className="h-24" />
            </Typography>
            <div className="text-white text-left">
              <div className="flex flex-col  space-y-3">
                <div className="md:flex md:space-x-2">
                  <p className="font-semibold">Company Name :</p> <p> EMINENCE IT SERVICES</p>
                </div>
                <div className="md:flex md:space-x-2">
                  <p className="font-semibold">Address&nbsp;:</p> <p>  #174, 2ND Floor, 3rd Cross, Balaji Layout Mallathahalli Main Road, Bengaluru – 560056</p>
                </div>
                <div className="md:flex md:space-x-2">
                  <p className="font-semibold">Contact :</p> <p> 9483627307 / 9742136985</p>
                </div>
                <div className="md:flex md:space-x-2">
                  <p className="font-semibold">Email ID :</p> <p> info@eminenceit.com</p>
                </div>
              </div>

            </div>
            {/*
              <Typography className="font-normal text-blue-gray-500 lg:w-2/3">
                {description}
              </Typography>
              */}
            <div className="md:mx-auto mt-6 mb-8 flex md:justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent text-xl text-white  hover:shadow-sky-blue hover:border-sky-blue">
                    <p color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </p>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="md:mx-auto mt-12 grid w-max lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-24 lg:mt-0  md:w-6/12 md:px-0 px-4">
            {menus.map(({ name, items }) => (
              <div key={name} className="lg:w-[200px]">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase cursor-pointer text-white text-xl"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>

                      {item.path.startsWith('/') ? (
                        <Link to={item.path}
                          rel="noreferrer"
                          variant="small"
                          className="mb-2 block font-normal text-white hover:text-blue-gray-700 cursor-pointer text-lg capitalize"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Typography href={item.path}
                          target="_blank"
                          rel="noreferrer"
                          variant="small"
                          className="mb-2 block font-normal text-white hover:text-blue-gray-700 cursor-pointer text-lg capitalize"
                        >
                          {item.name}
                        </Typography>
                      )}

                      {/*
                      <Typography
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-white hover:text-blue-gray-700 cursor-pointer text-lg capitalize"
                      >
                        {item.name}
                      </Typography>
                      */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 md:text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500 text-lg"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Logo",
  description:
    "Easy to use React components for Tailwind CSS and Material Design.",
  socials: [
    {
      color: "white",
      name: "whatsapp",
      // path: "https://www.twitter.com/creativetim",
      "path": "https://wa.me/9483627307 ",
      // path: "https://wa.me/9742136985",
    },
    {
      color: "white",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "white",
      name: "facebook",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "white",
      name: "linkedin",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "About Us",
      items: [
        { name: "Our history", path: "https://www.creative-tim.com/presentation" },
        { name: "who we are ", path: "https://www.creative-tim.com/blog" },
        { name: "Our Values", path: "https://www.creative-tim.com/blog" },
        { name: "Our team", path: "https://www.creative-tim.com/blog" },
        { name: "privacy policys", path: "/privacy-policys" },
      ],
    },
    {
      name: "solutions",
      items: [
        { name: "hospitals", path: "https://www.creative-tim.com/presentation" },
        { name: "Schools & Institutions", path: "https://www.creative-tim.com/blog" },
        { name: "Hotels & Restaurants", path: "https://www.creative-tim.com/blog" },
        { name: "Manufacturing", path: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "Partners",
      items: [
        { name: "Tally", path: "https://www.creative-tim.com/presentation" },
        { name: "Microsoft dynamics", path: "https://www.creative-tim.com/blog" },
        { name: "Credflow", path: "https://www.creative-tim.com/blog" },
        { name: "Google Partner", path: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "Services",
      items: [
        {
          name: "Tally Development",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Microsoft dynamics",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "website development",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Web app Development",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
  copyright: (
    <p className="text-white transition-colors hover:text-blue-500 cursor-pointer">
      copyright © eminenceitservices, 2024 all rights reserved.
    </p>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
