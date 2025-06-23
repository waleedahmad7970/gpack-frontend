"use client";
import HeroSection from "@/components/hero/hero-section";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contact_bg } from "@/public/assets/banners";
export default function Page() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", values);
        alert("Message sent successfully!");
        resetForm();
      } catch (error) {
        console.error("Submission error:", error);
        alert("Failed to send message. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div>
      <HeroSection bannerHeight={500} image={contact_bg} title="Contact Us" />
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between rounded-lg bg-white px-[10px] py-[40px] md:flex-row md:px-0 md:py-[100px]">
        <div className="max-w-[581px]">
          <h2 className="font-manrope mb-5 text-[48px] leading-normal font-semibold text-[#192451]">
            Get in Touch
          </h2>

          <p className="mb-[50px] text-[16px] leading-[24px] text-[#192451]">
            We are here to help you achieve financial success! Whether you have
            a question, need expert financial advice, or want to schedule a
            consultation, feel free to reach out to us.
          </p>

          <div className="mb-[50px]">
            <p className="mb-5 text-[16px] leading-normal font-normal text-[#192451] underline">
              info@opse.org
            </p>
            <p className="text-[16px] leading-normal font-normal text-[#192451] underline">
              +82 51 123 4567
            </p>
          </div>
        </div>
        <div className="hidden h-[270px] w-[1px] bg-[#000] md:block" />

        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-[466px] space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-5 text-[16px] leading-[24px] font-normal text-[#192451]"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`w-full border-b px-4 py-2 focus:outline-none ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500 focus:ring-red-200"
                  : "border-[#000] focus:border-[#D98918] focus:ring-blue-200"
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-5 text-[16px] leading-[24px] font-normal text-[#192451]"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full border-b px-4 py-2 focus:outline-none ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-[#000] focus:border-[#D98918] focus:ring-blue-200"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-0 text-[16px] leading-[24px] font-normal text-[#192451]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={`w-full border-b px-4 py-2 focus:outline-none ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500 focus:ring-red-200"
                  : "border-[#000] focus:border-[#D98918] focus:ring-blue-200"
              }`}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {formik.errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
            className="w-full max-w-[173px] rounded-[100px] bg-[#D98918] px-4 py-3 font-medium text-white transition duration-200 hover:bg-[#D98918] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {formik.isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
