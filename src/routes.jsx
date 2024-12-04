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
  },
  {
    name: "our services",
    path: "/our-services",
    element: <OurServices />,
  },
  {
    name: "Why Choose Us?",
    path: "/oup-usp",
    element: <OurUSP />,
  },
  {
    name: "CONTACT US",
    path: "/contct-us",
    element: <ContactUs />,
  },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
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
