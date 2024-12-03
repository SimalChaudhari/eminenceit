import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData, objectiveData } from "@/data";
import SliderComponent from "@/widgets/sliders/home-slider";
import PartnersSliderComponent from "@/widgets/sliders/partners-slider";
import ReviewsCarousel from "@/widgets/sliders/review-slider";

export function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black lg:text-5xl text-3xl"
              >
                EMPOWERING THE TECHNOLOGY
              </Typography>

              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <Typography variant="lead" color="white" className="opacity-80">
                  We are committed to deliver the best technological services that your Business  deserves for its growth.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          {/*
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
        */}
          <SliderComponent />
          {/*
          <div className="mt-32 flex flex-wrap items-center">
          */}

          {/*
            <div className="my-10 flex flex-wrap items-center">
              <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                  <FingerPrintIcon className="h-8 w-8 text-white " />
                </div>
                <Typography
                  variant="h3"
                  className="mb-3 font-bold"
                  color="blue-gray"
                >
                  Working with us is a pleasure
                </Typography>
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                  <br />
                  <br />
                  The kit comes with three pre-built pages to help you get started
                  faster. You can change the text and images and you're good to
                  go. Just make sure you enable them first via JavaScript.
                </Typography>
                <Button variant="filled">read more</Button>
              </div>
              <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                  <CardHeader floated={false} className="relative h-56">
                    <img
                      alt="Card Image"
                      src="/img/teamwork.png"
                      className="h-full w-full"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-3 mt-2 font-bold"
                    >
                      Top Notch Services
                    </Typography>
                    <Typography className="font-normal text-blue-gray-500">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
          */}

          <div className="mt-20">
            <div className="mx-auto mt-24 flex w-full justify-center px-0 lg:px-4 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">

                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Our Mission
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Our mission is to empower businesses to reach their full potential by providing cutting-edge technological development solutions like technical support, IT Support, cyber security, cloud services, Microsoft dynamics, web development,   that are tailored to their unique needs.
                    <br />
                    <br />
                    We strive to deliver high-quality products that are both functional and visually appealing, ensuring our clients stay ahead of the curve in an ever-evolving digital landscape.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap items-center">
            <div className="-mt-8 w-full px-4 md:w-1/2">
              {/*
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              */}
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Our Objective
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Eminence IT Services also offer our clients IT strategy, business process re engineering, IT staffing, independent verification and validation, and project management oversight. Our team has experts in the fields of market analysis, business analysis, product customization, software system integration, and delivery, who make sure that your business leverages technology to its full extent at every growth stage.
                <br />
                <br />
                At Eminence IT Services, we go beyond helping businesses transform through technology. We help them in making a meaningful difference; to their customers, and to the communities they serve.
              </Typography>

            </div>
            <div className="mx-auto mt-5 flex w-full lg:justify-center lg:px-4 px-8 md:w-4/12 lg:mt-0">
              <ul className="list-disc">
                {objectiveData.map(({ title }) => (
                  <li key={title} className="my-3 text-blue-gray-500 ">
                    {title}
                  </li>
                ))}
              </ul>

            </div>
          </div>

          <hr className="my-20" />

          <PartnersSliderComponent />

          <hr className="mt-20" />

          <div className="mt-20">
            <ReviewsCarousel />
          </div>
        </div>
      </section>
      {/*
        <section className="px-4 pt-20 pb-48">
          <div className="container mx-auto">
            <PageTitle section="Our Team" heading="Here are our heroes">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </PageTitle>
            <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
              {teamData.map(({ img, name, position, socials }) => (
                <TeamCard
                  key={name}
                  img={img}
                  name={name}
                  position={position}
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name }) => (
                        <IconButton key={name} color={color} variant="text">
                          <i className={`fa-brands text-xl fa-${name}`} />
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="relative bg-white py-24 px-4">
          <div className="container mx-auto">
            <PageTitle section="Co-Working" heading="Build something">
              Put the potentially record low maximum sea ice extent tihs year down
              to low ice. According to the National Oceanic and Atmospheric
              Administration, Ted, Scambos.
            </PageTitle>
            <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
              {contactData.map(({ title, icon, description }) => (
                <Card
                  key={title}
                  color="transparent"
                  shadow={false}
                  className="text-center text-blue-gray-900"
                >
                  <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                    {React.createElement(icon, {
                      className: "w-5 h-5 text-white",
                    })}
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    {description}
                  </Typography>
                </Card>
              ))}
            </div>
            <PageTitle section="Contact Us" heading="Want to work with us?">
              Complete this form and we will get back to you in 24 hours.
            </PageTitle>
            <form className="mx-auto w-full mt-12 lg:w-5/12">
              <div className="mb-8 md:flex gap-8">
                <Input variant="outlined" size="lg" label="Full Name" />
                <Input variant="outlined" size="lg" label="Email Address" />
              </div>
              <Textarea variant="outlined" size="lg" label="Message" rows={8} />
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button variant="gradient" size="lg" className="mt-8" fullWidth>
                Send Message
              </Button>
            </form>
          </div>
        </section>
      */}
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
