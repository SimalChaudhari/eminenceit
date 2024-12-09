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
      { name: "OurHistory", path: "/aboutus#OurHistory" },
      { name: "WhoWeAre", path: "/aboutus#WhoWeAre" },
      { name: "OurValues", path: "/aboutus#OurValues" },
    ],
  },
  {
    name: "our services",
    path: "/our-services",
    element: <OurServices />,
    submenu: [
      { name: "TallyTraining", path: "/our-services#TallyTraining" },
      { name: "WebsiteDevelopment", path: "/our-services#WebsiteDevelopment" },
      { name: "WebApppDevelopment", path: "/our-services#WebApppDevelopment" },
      { name: "HybridMobileAppDevelopment", path: "/our-services#HybridMobileAppDevelopment" },
      { name: "NativeAppDevelopment", path: "/our-services#NativeAppDevelopment" },
      { name: "TallyDevelopment(TDL)", path: "/our-services#TallyDevelopment(TDL)" },
    ],
  },
  {
    name: "Why Eminence?",
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
