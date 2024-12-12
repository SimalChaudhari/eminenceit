import { AboutUs, ContactUs, Home, OurServices, OurUSP, PrivacyPolicy, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "about us",
    path: "/aboutus",
    element: <AboutUs />,
    submenu: [
      { name: "Our History", path: "/aboutus#OurHistory" },
      { name: "Who WeAre", path: "/aboutus#WhoWeAre" },
      { name: "Our Values", path: "/aboutus#OurValues" },
    ],
  },
  {
    name: "our services",
    path: "/our-services",
    element: <OurServices />,
    submenu: [
      { name: "Tally Training", path: "/our-services#TallyTraining" },
      { name: "Website Development", path: "/our-services#WebsiteDevelopment" },
      { name: "WebAppp Development", path: "/our-services#WebApppDevelopment" },
      { name: "Hybrid MobileApp Development", path: "/our-services#HybridMobileAppDevelopment" },
      { name: "NativeApp Development", path: "/our-services#NativeAppDevelopment" },
      { name: "Tally Development (TDL)", path: "/our-services#TallyDevelopment(TDL)" },
    ],
  },
  {
    name: "Why Eminence It?",
    path: "/oup-usp",
    element: <OurUSP />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    element: <ContactUs />,
  },
  // {
  //   name: "Privacy Policy",
  //   path: "/privacy-policy",
  //   element: <PrivacyPolicy />,
  // },
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
