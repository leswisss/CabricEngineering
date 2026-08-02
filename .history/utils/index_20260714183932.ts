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
    name: "name",
    type: "text",
    placeholder: t("yourname"),
    errorMessage: t("nameerror"),
    label: t("name"),
    required: true,
    minlength: 3,
    inputState: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: t("youremail"),
    errorMessage: t("emailerror"),
    label: "Email*",
    required: true,
    inputState: true,
  },
  {
    id: 3,
    name: "phone",
    type: "tel",
    placeholder: t("yourphone"),
    errorMessage: "Company name must be at least 2 characters long.",
    label: t("phone"),
    required: true,
    minlength: 2,
    inputState: true,
  },
  {
    id: 4,
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
