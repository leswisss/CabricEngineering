"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/ContactPage/contactsection.module.scss";
import RoundText from "../ReUsables/RoundText";
import FormInput from "./FormInput";
import { useT } from "next-i18next/client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import parsePhoneNumber, { CountryCode } from "libphonenumber-js";

interface CountryData {
  countryCode: string;
  dialCode: string;
  format?: string;
  name: string;
}

const ContactSection = () => {
  const { t } = useT();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [buttonText, setButtonText] = useState("Send");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [phoneError, setPhoneError] = useState("");
  const [country, setCountry] = useState(null);

  //Managing Country codes
  const [currentCountry, setCurrentCountry] = useState<CountryCode>("CM");

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      setFocused(false);
    }
  }, [isSubmitting]);

  const handleFocus = () => {
    if (!isSubmitting) {
      // Skip onBlur during form reset/submission
      setFocused(true);
    }
  };

  // Validate phone number in real-time
  const handlePhoneChange = (phoneValue: string, country: CountryData) => {
    // Update current country (libphonenumber-js expects uppercase 2-letter ISO)
    if (country?.countryCode) {
      setCurrentCountry(country.countryCode.toUpperCase() as CountryCode);
    }

    const phoneNumber = parsePhoneNumber(
      phoneValue,
      (country?.countryCode?.toUpperCase() as CountryCode) ?? currentCountry
    );

    if (phoneNumber && phoneNumber.isValid()) {
      setPhoneError("");
    } else {
      setPhoneError("Enter a valid phone number.");
    }
  };

  const FormFieldsData = [
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

  const firstTwo = FormFieldsData.slice(0, 2);

  return (
    <div className={styles.con__section}>
      <div className={`container ${styles.con__container}`}>
        <div className={styles.con__left}>
          <RoundText color="var(--gold)" text={t("send")} />
        </div>
        <div className={styles.con__right}>
          <form action="" className={styles.form}>
            <div className={styles.form__top}>
              {firstTwo.map((data, i) => (
                <FormInput
                  data={data}
                  key={`fs${i}`}
                  isSubmitting={isSubmitting}
                />
              ))}
            </div>
            <div className={styles.form__top}>
              <div
                className={`${styles.phoneinput} ${
                  phoneError ? styles.phoneinputError : ""
                }`}
              >
                <span className={styles.label}>{t("phone")}</span>
                <PhoneInput
                  country={"cm"}
                  onChange={handlePhoneChange} // pass the phone value directly
                  inputProps={{
                    name: "phone",
                    required: true,
                    placeholder: "+237 690 000 000",
                  }}
                  onBlur={handleFocus}
                  data-focused={focused.toString()}
                />
                {phoneError === "Enter a valid phone number." && (
                  <span className={styles.error}>{t("phoneerror")}</span>
                )}
              </div>
              <div className={styles.form__in}>
                <span className={styles.label}>{t("country")}</span>
                <CountrySelect
                  containerClassName="form-group"
                  inputClassName=""
                  onChange={(_country) => setCountry(_country)}
                  onTextChange={(_txt) => console.log(_txt)}
                  placeHolder={t("yourcountry")}
                />
              </div>
            </div>
            <div className={styles.form__bottom}>
              <FormInput data={FormFieldsData[2]} isSubmitting={isSubmitting} />
            </div>
            <div className={styles.pri}></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
