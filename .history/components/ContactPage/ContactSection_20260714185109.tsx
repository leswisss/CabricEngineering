"use client";

import React, { useState, useRef } from "react";
import styles from "../../styles/ContactPage/contactsection.module.scss";
import RoundText from "../ReUsables/RoundText";
import { FormFieldsData } from "@/utils";
import FormInput from "./FormInput";
import { useT } from "next-i18next/client";

const ContactSection = () => {
  const { t } = useT();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [buttonText, setButtonText] = useState("Send");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      name: "projectscope",
      type: "text",
      placeholder: t("yourtell"),
      errorMessage: "Project description must be at least 10 characters long.",
      label: t("tellmore"),
      required: true,
      minlength: 10,
      inputState: false,
    },
  ];
  const firstTwo = FormFieldsData.slice(0, 1);

  return (
    <div className={styles.con__section}>
      <div className={`container ${styles.con__container}`}>
        <div className={styles.con__left}>
          <RoundText color="var(--gold)" text={t("send")} />
        </div>
        <div className={styles.con__right}>
          <form action="">
            <div className={styles.form__top}>
              {firstTwo.map((data, i) => (
                <FormInput
                  data={data}
                  key={`fs${i}`}
                  isSubmitting={isSubmitting}
                />
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
