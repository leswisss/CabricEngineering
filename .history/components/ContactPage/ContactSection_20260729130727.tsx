"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/ContactPage/contactsection.module.scss";
import RoundText from "../ReUsables/RoundText";
import FormInput from "./FormInput";
import { useT } from "next-i18next/client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
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
  const { t, i18n } = useT();
  const currentLocale = i18n.language;

  const formRef = useRef<HTMLFormElement | null>(null);
  const [buttonText, setButtonText] = useState(t("sender"));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tickError, setTickError] = useState(false);
  const [activeBox, setActiveBox] = useState(false);

  const [phoneError, setPhoneError] = useState("");
  const [countryy, setCountry] = useState(null);
  const [countryError, setCountryError] = useState("");

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

  const toggleCheckbox = () => {
    const newActiveBox = !activeBox;
    setActiveBox(newActiveBox);

    // If the user ticks the box, remove any error
    if (newActiveBox) {
      setTickError(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if phone number is valid
    if (!countryy) {
      setCountryError("Select a country.");
      return;
    } else {
      setCountryError("");
    }

    // If checkbox is not ticked, show error and stop submission
    if (!activeBox) {
      setTickError(true);
      return;
    }

    setTickError(false);

    //Form Data
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string;
    const country = countryy as string | null;
    const message = formData.get("projectscope") as string | null;

    // Validate phone number using automatic country detection
    const phoneNumber = parsePhoneNumber(phone, currentCountry);

    // Check if phone number is valid
    if (!phoneNumber || !phoneNumber.isValid()) {
      setPhoneError("Enter a valid phone number.");
      return;
    } else {
      setPhoneError("");
    }

    // Change button text and show "Submitting..."
    setButtonText(t("sending"));
    setIsSubmitting(true);

    try {
      const response = await fetch(`/${currentLocale}/api/contact`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          country,
          message,
        }),
      });
      if (response.ok) {
        // On success, update button text
        setButtonText(t("thankyou"));
        console.log(formData, country);
        // Reset form after a successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
        setActiveBox(false);
      } else {
        // If API response is not ok, show error
        setButtonText(t("sorry"));
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setButtonText(t("sorry"));
      setIsSubmitting(false);
    } finally {
      // After 3 seconds, reset the button text to "Submit form"
      setIsSubmitting(false); // Enable the button again
      setTimeout(() => {
        setButtonText(t("sender"));
      }, 5000);
    }
  };

  return (
    <div className={styles.con__section}>
      <div className={`container ${styles.con__container}`}>
        <div className={styles.con__left}>
          <RoundText color="var(--gold)" text={t("send")} />
        </div>
        <div className={styles.con__right}>
          <form
            action=""
            className={styles.form}
            ref={formRef}
            onSubmit={handleSubmit}
          >
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
                  onChange={(_country: any) => {setCountry(_country?.name ?? "")}}
                  onTextChange={(_txt) => console.log(_txt)}
                  placeHolder={t("yourcountry")}
                />
                {countryError === "Select a country." && (
                  <span className={styles.error}>{t("counerror")}</span>
                )}
              </div>
            </div>
            <div className={styles.form__bottom}>
              <FormInput data={FormFieldsData[2]} isSubmitting={isSubmitting} />
            </div>
            <div className={styles.pri__button}>
              <div className={styles.tickbox}>
                <div className={styles.ticktop}>
                  <div
                    className={`${styles.tick} ${
                      activeBox ? styles.active : ""
                    }`}
                    onClick={toggleCheckbox}
                  >
                    <div className={styles.tbutton}></div>
                  </div>
                  <div className={styles.agree}>
                    <span>{t("bysending")}</span>{" "}
                    <Link
                      href={
                        currentLocale === "en"
                          ? "/en/privacy"
                          : "/fr/confidentialite"
                      }
                    >
                      {t("poli")}
                    </Link>
                  </div>
                </div>
                {tickError && (
                  <span className={styles.checkbox__error}>
                    {t("tickagree2")}
                  </span>
                )}
              </div>
              <button
                className={styles.button__wrapper}
                type="submit"
                disabled={isSubmitting}
              >
                <p className={styles.btext}>{buttonText}</p>
                <div className={styles.round__border}>
                  <div className={styles.round__inner}></div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
