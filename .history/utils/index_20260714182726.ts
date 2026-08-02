import { useT } from "next-i18next/client";

const { t } = useT();

export const swiperSettings = {
  slidesPerView: 2.7,
  spaceBetween: 20,
  breakpoints: {
    1300: {
      slidesPerView: 2.7,
    },
  },
};

export const FormFieldsData = [
  {
    id: 1,
    name: "fullname",
    type: "text",
    placeholder: "Your full name",
    errorMessage: "Your full name must contain at least 3 letters.",
    label: "Full Name*",
    required: true,
    minlength: 3,
    inputState: true,
  },
  {
    id: 2,
    name: "companyemail",
    type: "email",
    placeholder: "example@domain.com",
    errorMessage: "Please enter a valid company email address.",
    label: "Company Email*",
    required: true,
    inputState: true,
  },
  {
    id: 3,
    name: "companyname",
    type: "text",
    placeholder: "Your company name",
    errorMessage: "Company name must be at least 2 characters long.",
    label: "Company Name*",
    required: true,
    minlength: 2,
    inputState: true,
  },
  {
    id: 4,
    name: "companywebsite",
    type: "text",
    placeholder: "www.website.com",
    label: "Company Website",
    required: false,
    inputState: true,
  },
  {
    id: 5,
    name: "projectscope",
    type: "text",
    placeholder: "Start typing here...",
    errorMessage: "Project description must be at least 10 characters long.",
    label: "Tell us about your project(Scope, Timeline, Budget)*",
    required: true,
    minlength: 10,
    inputState: false,
  },
];
