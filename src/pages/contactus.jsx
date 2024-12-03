import React, { useState } from "react";
import { Typography, Button, Input, Select, Option, Textarea } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import axios from "axios";

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
        lead: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
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
        if (!formValues.lead) newErrors.lead = "Please select a lead type.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setLoading(true); // Enable loader
            axios.post('https://api.sheetbest.com/sheets/00b62f84-1ff2-4746-93d2-487f6937ff25', formValues)
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
                        lead: "",
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
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative block h-[50vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto px-4 text-center lg:w-8/12 mt-44">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 font-black lg:text-5xl text-3xl"
                            >
                                Contact Us
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative bg-white pt-16">
                <div className="container mx-auto px-4">
                    {/* Google Maps Section */}
                    <div className="mb-10">
                        <Typography
                            variant="h3"
                            className="font-bold text-blue-gray-900 mb-4 text-center"
                        >
                            Our Location
                        </Typography>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=YourGoogleMapEmbedCode"
                                width="100%"
                                height="400"
                                allowFullScreen
                                loading="lazy"
                                className="border-0 w-full h-64"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative bg-white">
                <div className="container mx-auto px-4">
                    <section className="relative bg-white py-16">
                        <div className="container mx-auto px-4 bg-gray-50  rounded-lg shadow-lg">
                            {/* Contact Form */}
                            <div className="py-10 px-10">
                                <Typography
                                    variant="h4"
                                    className="font-bold text-blue-gray-900 mb-6 text-center"
                                >
                                    Get in Touch
                                </Typography>
                                <form onSubmit={handleSubmit} className="space-y-4">
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
                                    <div>
                                        <div className="md:flex items-center md:space-x-4 md:space-y-0 space-y-2">
                                            <Typography>Lead From:</Typography>
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
                                    <Button
                                        type="submit"
                                        color="black"
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

            <section className="relative bg-white pb-36">
                <div className="container mx-auto px-4">
                    {/* FAQ Section */}
                    <div className="mt-10">
                        <Typography
                            variant="h4"
                            className="font-bold text-blue-gray-900 mb-6 text-center"
                        >
                            Frequently Asked Questions
                        </Typography>
                        <div className="space-y-4">
                            <details className="bg-gray-100 rounded-lg shadow p-4">
                                <summary className="font-bold text-blue-gray-800 cursor-pointer">
                                    What separates you from the competition?
                                </summary>
                                <Typography className="text-blue-gray-600 mt-2">
                                    Our domain knowledge and expertise in solutions providing make us unique.
                                </Typography>
                            </details>
                            <details className="bg-gray-100 rounded-lg shadow p-4">
                                <summary className="font-bold text-blue-gray-800 cursor-pointer">
                                    Is your help desk open 24/7?
                                </summary>
                                <Typography className="text-blue-gray-600 mt-2">
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
