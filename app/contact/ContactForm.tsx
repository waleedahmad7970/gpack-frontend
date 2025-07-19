"use client";

import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { API_URL } from '@/config/config';
import { useState } from 'react';
import ErrorValidations from '@/components/ErrorValidations';
import SuccessModal from '@/components/modals/SuccessModal';

// 1. Define TypeScript type for form values
interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

// 2. Define Yup schema
const ContactValidationSchema = Yup.object({
    name: Yup.string().required('Name is required.'),
    email: Yup.string().email().required('Email is required.'),
    message: Yup.string().min(6, 'Must at At 10 characters or greater.').required('Message is required.'),
});

type LaravelValidationErrors = {
    [key: string]: string[];
};

export default function ContactForm() {

    const [errors, setErrors] = useState<string[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    const initialValues: ContactFormValues = {
        name: '',
        email: '',
        message: ''
    };

    const handleSubmit = async (values: ContactFormValues, { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>) => {
    
        clearErrors();

        const payload = {
            name: values.name,
            email: values.email,
            message: values.message
        };

        try {
            const res = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if(res.status === 422) {
                const data = await res.json();
                const allErrors = Object.values(data.errors as LaravelValidationErrors).flat();
                setErrors(allErrors);
                return;
            }

            if (!res.ok) throw new Error('Unexpected error');
            
            setShowModal(true)
            resetForm()
           // toast.success("Well done! Profile updated successfully.")

        } catch(err) {
            setErrors(['A network error occured.'])
        } finally {
            setSubmitting(false)
            resetForm()
        }
    };

    const clearErrors = () => {
        setErrors([]);   
    }

    return (
        <>
            {errors && errors.length > 0 && ( 
                <ErrorValidations
                    errors={errors} 
                />
                
            )} 

            <Formik
                initialValues={initialValues}
                validationSchema={ContactValidationSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => (
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
                                type="text"
                            //    onChange={formik.handleChange}
                            //    onBlur={formik.handleBlur}
                            //    value={formik.values.name}
                                {...formik.getFieldProps('name')}
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
                            className="w-full max-w-[173px] rounded-[100px] bg-[#D98918] px-4 py-3 font-medium text-white transition duration-200 hover:bg-[#D98918] cursor-pointer"
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
                )}
            </Formik>
            
            <SuccessModal 
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </>
    );
}
