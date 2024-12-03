import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import FT_Logo from "../../assets/Logo/FT_LOGO_EMINENCE_TRANSPARENT.png"

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 md:w-2/6">
            <Typography variant="h4" className="mb-4" color="blue-gray">
            {/*
              {title}
              */}
              
             <img src={FT_Logo} alt="FT_Logo" className="h-36"/>
            </Typography>
            {/*
              <Typography className="font-normal text-blue-gray-500 lg:w-2/3">
                {description}
              </Typography>
              */}
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-24 lg:mt-0  md:w-6/12">
            {menus.map(({ name, items }) => (
              <div key={name} className="lg:w-[200px]">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase cursor-pointer"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700 cursor-pointer"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
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
      color: "gray",
      name: "whatsapp",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "gray",
      name: "facebook",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "gray",
      name: "linkedin",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "About Us",
      items: [
        { name: "Ourhistory", path: "https://www.creative-tim.com/presentation" },
        { name: "Our Values", path: "https://www.creative-tim.com/blog" },
        { name: "Our team", path: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "solutions",
      items: [
        { name: "hospitals", path: "https://www.creative-tim.com/presentation" },
        { name: "who we are  Schools & Instituions", path: "https://www.creative-tim.com/blog" },
        { name: "Hotels &Restaurants", path: "https://www.creative-tim.com/blog" },
        { name: "Manufacturing", path: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "Partners",
      items: [
        { name: "Tally", path: "https://www.creative-tim.com/presentation" },
        { name: "Microsoftdynamics", path: "https://www.creative-tim.com/blog" },
        { name: "Credflow", path: "https://www.creative-tim.com/blog" },
        { name: "Google Partner", path: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "Services",
      items: [
        {
          name: "TallyDevelopment",
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
    <p className="text-blue-gray-500 transition-colors hover:text-blue-500 cursor-pointer">
    copyright @ eminenceitservices, 2024 all rights reserved.
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
