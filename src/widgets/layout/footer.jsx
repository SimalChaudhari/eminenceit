import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import FT_Logo from "../../assets/Logo/FT_LOGO_EMINENCE_TRANSPARENT.png"
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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

              {/* When Address Not Display
                <img src={FT_Logo} alt="FT_Logo" className="h-24 lg:h-44" />
                */}
                <img src={FT_Logo} alt="FT_Logo" className="h-24" />
            </Typography>
            <div className="text-white text-left font-Signika">
              <div className="flex flex-col  space-y-3">
                <div className="md:flex md:space-x-2">
                  <p> EMINENCE IT SERVICES</p>
                </div>
                <div className="flex space-x-2">
                  <p ><i class="fa-solid fa-location-dot"></i>&nbsp;</p> <p>  #174, 2ND Floor, 3rd Cross, Balaji Layout Mallathahalli Main Road, Bengaluru – 560056</p>
                </div>
                <div className="flex space-x-2">
                  <p className="font-semibold"><i class="fa-solid fa-phone"></i></p> <p> 9483627307 / 9742136985</p>
                </div>
                <div className="flex space-x-2">
                  <p className="font-semibold"><i class="fa-solid fa-envelope"></i></p> <p> info@eminenceit.com</p>
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
                  className="mb-2 block font-medium uppercase cursor-pointer text-white text-xl  font-Bai"
                >
                  {name}
                </Typography>
                <ul className="mt-3 ">
                  {items.map((item) => (
                    <li key={item.name} className=" font-Signika">

                      {item.path.startsWith('/') ? (
                        <HashLink to={item.path}
                          rel="noreferrer"
                          variant="small"
                          className="mb-2 block font-normal text-white hover:text-blue-gray-700 cursor-pointer text-lg capitalize  font-Signika"
                        >
                          {item.name}
                        </HashLink>
                      ) : (
                        <HashLink href={item.path}
                          // target="_blank"
                          rel="noreferrer"
                          variant="small"
                          className="mb-2 block font-normal text-white hover:text-blue-gray-700 cursor-pointer text-lg capitalize  font-Signika"
                        >
                          {item.name}
                        </HashLink>
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
              className="font-normal text-blue-gray-500 text-lg  font-Signika"
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
      "path": "https://wa.me/8310939779 ",
      // "path": "https://wa.me/9483627307 ",
      // path: "https://wa.me/9742136985",
    },
    {
      color: "white",
      name: "instagram",
      path: "https://www.instagram.com/eminence_it_services/?hl=en",
    },
    {
      color: "white",
      name: "facebook",
      path: "https://www.facebook.com/profile.php?id=61552694126419",
    },
    {
      color: "white",
      name: "linkedin",
      path: "/",
    },
  ],
  menus: [
    {
      name: "About Us",
      items: [
        { name: "Our history", path: "/aboutus#OurHistory" },
        { name: "who we are ", path: "/aboutus#WhoWeAre" },
        { name: "Our Values", path: "/aboutus#OurValues" },
        { name: "privacy policys", path: "/privacy-policys" },
      ],
    },
    {
      name: "solutions",
      items: [
        { name: "Microsoft Dynamics", path: "https://www.creative-tim.com/presentation" },
        { name: "Tally Verticle Solutions", path: "https://www.creative-tim.com/blog" },
        { name: "Campus 365", path: "https://www.creative-tim.com/blog" },
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
          name: "ERP Implementations",
          path: "/our-services#ERPImplementation",
        },
        {
          name: "Custom Application Development",
          path: "/our-services#CustomApplicationDevelopment",
        },
        {
          name: "Tally Customisation & Trainings",
          path: "/our-services#TallyCustomizationsAndTrainings",
        },
      ],
    },
  ],
  copyright: (
    <p className="text-white transition-colors hover:text-blue-500 cursor-pointer">
      copyright © eminenceitservices, 2021 all rights reserved.
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
