import React, { useState } from "react";
import { Typography, Button, Input, Select, Option, Textarea } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import axios from "axios";
import Contact_Map from "../assets/images/contactus_page.jpg"
import ContactUs_Image from "../assets/images/Contact_Us_Image_Background_removebg_preview.png"
import BackContactUs_Image from "../assets/images/Back_Contact_us.jpg"

export function ContactUs() {

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        country: "",
        state: "",
        city: "",
        enquiry: "",
        requirement: "",
        // lead: "",
        // salesmanName: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value });
    //     setErrors({ ...errors, [name]: "" });
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Reset "salesmanName" if "lead" changes to "Customer"
        // if (name === "lead" && value === "Customer") {
        //     setFormValues({ ...formValues, [name]: value, salesmanName: "" });
        // } else {
        //     setFormValues({ ...formValues, [name]: value });
        // }

        setErrors({ ...errors, [name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!formValues.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formValues.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formValues.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!/^[\d]{10}$/.test(formValues.phone))
            newErrors.phone = "Phone number must be 10 digits.";
        if (!formValues.email.trim()) newErrors.email = "Email is required.";
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email))
            newErrors.email = "Enter a valid email address.";
        if (!formValues.country.trim()) newErrors.country = "Country is required.";
        if (!formValues.enquiry.trim()) newErrors.enquiry = "Please select an enquiry.";
        if (!formValues.requirement.trim())
            newErrors.requirement = "Requirement details are required.";
        // if (!formValues.lead) newErrors.lead = "Please select a lead type.";
        // if (formValues.lead === "Salesman" && !formValues.salesmanName.trim()) {
        //     newErrors.salesmanName = "Salesman name is required.";
        // }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setLoading(true); // Enable loader
            axios.post('https://api.sheetbest.com/sheets/505088b4-5e81-4a14-9f89-b391384f66f1', formValues)
                .then(response => {
                    setSuccessMessage("Data saved successfully!");
                    setFormValues({
                        firstName: "",
                        lastName: "",
                        phone: "",
                        email: "",
                        country: "",
                        state: "",
                        city: "",
                        enquiry: "",
                        requirement: "",
                        // lead: "",
                        // salesmanName: "",
                    });
                })
                .catch(error => {
                    setSuccessMessage("Failed to save data. Please try again.");
                })
                .finally(() => {
                    setLoading(false); // Disable loader
                    setTimeout(() => {
                        setSuccessMessage(""); // Clear message after 5 seconds
                    }, 5000);
                });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="overflow-x-hidden ">


            <section className="relative bg-white bg-opacity-20 border-y-2 py-10 font-Signika"
            >
                <div className="container mx-auto px-4 ">
                    <div className="md:flex">

                        {/* Left side text or content */}
                        <div className="flex flex-col justify-center md:w-1/2 w-full">
                            <h2 className="text-3xl md:text-6xl font-bold text-dark-blue mb-4 uppercase" data-aos="fade-up">Contact Us</h2>
                            <p className="md:text-lg text-custome-blue md:mt-6" data-aos="fade-up">
                            Reach us by filling out the contact form below, <br/>
                            we will do our best to respond within 24 hours
                            </p>

                        </div>

                        {/* Right side image or content */}
                        <div className="flex justify-center items-center md:w-1/2 w-full">
                            <img
                                src={ContactUs_Image}
                                alt="Your Image"
                                className="w-full h-full "
                                data-aos="fade-up"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative bg-white pt-16 hidden">
                <div className="container mx-auto px-4">
                    <div className="mb-10">

                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src={Contact_Map} alt="Contact_Map" />
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative bg-white">
                <div className="container mx-auto px-4">
                    <section className="relative bg-white py-16">
                        <div className="container mx-auto px-4 bg-gray-50  rounded-lg shadow-lg">
                            {/* Contact Form */}
                            <div className="py-10 md:px-10">
                                <Typography
                                    variant="h4"
                                    className="font-Signika font-bold text-dark-blue mb-6 md:text-center capitalize md:text-3xl text-xl text-left"
                                >
                                    Get in touch with us and let us take your business to next level
                                </Typography>
                                <form onSubmit={handleSubmit} className="space-y-4 font-Signika">
                                    {successMessage && (
                                        <div className={`p-4 rounded-lg shadow-lg ${successMessage.includes("successfully") ? "bg-green-500 text-white" : "bg-red-500 text-white"} text-center`}>
                                            {successMessage}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div>
                                            <Input
                                                label="First Name *"
                                                name="firstName"
                                                value={formValues.firstName}
                                                onChange={handleChange}
                                                error={!!errors.firstName}
                                            />
                                            {errors.firstName && (
                                                <span className="text-red-500 text-sm">{errors.firstName}</span>
                                            )}
                                        </div>

                                        <div>
                                            <Input
                                                label="Last Name *"
                                                name="lastName"
                                                value={formValues.lastName}
                                                onChange={handleChange}
                                                error={!!errors.lastName}
                                            />
                                            {errors.lastName && (
                                                <span className="text-red-500 text-sm">{errors.lastName}</span>
                                            )}
                                        </div>

                                        <div>
                                            <Input
                                                label="Phone Number *"
                                                name="phone"
                                                value={formValues.phone}
                                                onChange={handleChange}
                                                error={!!errors.phone}
                                                type="number"
                                            />
                                            {errors.phone && (
                                                <span className="text-red-500 text-sm">{errors.phone}</span>
                                            )}
                                        </div>

                                        <div>
                                            <Input
                                                label="Mail ID *"
                                                name="email"
                                                value={formValues.email}
                                                onChange={handleChange}
                                                error={!!errors.email}
                                            />
                                            {errors.email && (
                                                <span className="text-red-500 text-sm">{errors.email}</span>
                                            )}
                                        </div>

                                        <div>
                                            <Input
                                                label="Country *"
                                                name="country"
                                                value={formValues.country}
                                                onChange={handleChange}
                                                error={!!errors.country}
                                            />
                                            {errors.country && (
                                                <span className="text-red-500 text-sm">{errors.country}</span>
                                            )}
                                        </div>

                                        <Input
                                            label="State"
                                            name="state"
                                            value={formValues.state}
                                            onChange={handleChange}
                                        />
                                        <Input
                                            label="City"
                                            name="city"
                                            value={formValues.city}
                                            onChange={handleChange}
                                        />
                                        <Select
                                            label="Select Enquiry For"
                                            name="enquiry"
                                            value={formValues.enquiry}
                                            onChange={(value) =>
                                                handleChange({ target: { name: "enquiry", value } })
                                            }
                                            error={!!errors.enquiry}
                                        >
                                            <Option value="Tally Customizations">Tally Customizations</Option>
                                            <Option value="Website Developments">Website Developments</Option>
                                            <Option value="Mobile App Developments">Mobile App Developments</Option>
                                            <Option value="CRM">CRM</Option>
                                            <Option value="Cloud Computing">Cloud Computing</Option>
                                            <Option value="Microsoft Dynamics">Microsoft Dynamics</Option>
                                            <Option value="Others">Others</Option>
                                        </Select>
                                        {errors.enquiry && (
                                            <span className="text-red-500 text-sm">{errors.enquiry}</span>
                                        )}
                                    </div>
                                    <Textarea
                                        label="Write More About Your Requirement"
                                        name="requirement"
                                        value={formValues.requirement}
                                        onChange={handleChange}
                                        error={!!errors.requirement}
                                    />
                                    {errors.requirement && (
                                        <span className="text-red-500 text-sm">{errors.requirement}</span>
                                    )}
<br/>
                                    {/*
                                        <div className="mt-3">
                                            {formValues.lead === "Salesman" && (
                                                <div>
                                                    <Input
                                                        label="Salesman Name *"
                                                        name="salesmanName"
                                                        value={formValues.salesmanName}
                                                        onChange={handleChange}
                                                        error={!!errors.salesmanName}
                                                    />
                                                    {errors.salesmanName && (
                                                        <span className="text-red-500 text-sm">{errors.salesmanName}</span>
                                                    )}
                                                </div>
                                            )}
    
                                        </div>
                                        <div>
                                            <div className="md:flex items-center md:space-x-4 md:space-y-0 space-y-2">
                                                <Typography className="font-Signika font-semibold" >Lead From:</Typography>
                                                <label className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        name="lead"
                                                        value="Customer"
                                                        onChange={handleChange}
                                                    />
                                                    <span>Customer</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input
                                                        type="radio"
                                                        name="lead"
                                                        value="Salesman"
                                                        onChange={handleChange}
                                                    />
                                                    <span>Salesman</span>
                                                </label>
                                            </div>
                                            {errors.lead && (
                                                <span className="text-red-500 text-sm">{errors.lead}</span>
                                            )}
                                        </div>
                                        */}


                                    <Button
                                        type="submit"
                                        className="px-8 py-3 font-Signika bg-dark-blue text-white font-semibold text-lg rounded-lg hover:bg-sky-blue transition duration-300"

                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className="relative bg-white pb-36 font-Signika">
                <div className="container mx-auto px-4">
                    {/* FAQ Section */}
                    <div className="mt-10">
                        <Typography
                            variant="h4"
                            className="font-bold text-custome-blue mb-6 text-center font-Signika"
                        >
                            Frequently Asked Questions
                        </Typography>
                        <div className="space-y-4">
                            <details className="bg-gray-100 rounded-lg shadow p-4">
                                <summary className="font-bold text-custome-blue cursor-pointer">
                                    What separates you from the competition?
                                </summary>
                                <Typography className="text-custome-blue mt-2 font-Signika">
                                    Our domain knowledge and expertise in solutions providing make us unique.
                                </Typography>
                            </details>
                            <details className="bg-gray-100 rounded-lg shadow p-4">
                                <summary className="font-bold text-custome-blue cursor-pointer">
                                    Is your help desk open 24/7?
                                </summary>
                                <Typography className="text-custome-blue mt-2 font-Signika">
                                    No, however, you can fill up the enquiry form, and our team will attend to it ASAP.
                                </Typography>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="bg-white">
                <Footer />
            </div>
        </div>
    );
}

export default ContactUs;
