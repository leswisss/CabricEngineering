

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import { CountrySelect } from "react-country-state-city";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useT } from "next-i18next/client";

import styles from "../../styles/ContactPage/contactsection.module.scss";
import RoundText from "../ReUsables/RoundText";
import FormInput from "./FormInput";

import "react-phone-input-2/lib/style.css";
import "react-country-state-city/dist/react-country-state-city.css";

interface SelectedCountry {
  name?: string;
  [key: string]: unknown;
}

const ContactSection = () => {
  const { t, i18n } = useT();

  const currentLocale = i18n.language;

  const formRef = useRef<HTMLFormElement | null>(null);

  const buttonResetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [buttonText, setButtonText] = useState(t("sender"));
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Privacy checkbox
  const [activeBox, setActiveBox] = useState(false);
  const [tickError, setTickError] = useState(false);

  // Phone field
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Country field
  const [country, setCountry] = useState<SelectedCountry | null>(null);

  const [countryError, setCountryError] = useState("");

  /*
   * CountrySelect manages part of its state internally.
   * Changing this key forces the component to reset.
   */
  const [countrySelectKey, setCountrySelectKey] = useState(0);

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      setFocused(false);
    }
  }, [isSubmitting]);

  /*
   * Clear the button timeout if the component unmounts.
   */
  useEffect(() => {
    return () => {
      if (buttonResetTimeout.current) {
        clearTimeout(buttonResetTimeout.current);
      }
    };
  }, []);

  const handleFocus = () => {
    if (!isSubmitting) {
      setFocused(true);
    }
  };

  const getParsedPhoneNumber = (phoneValue: string) => {
    if (!phoneValue.trim()) {
      return undefined;
    }

    /*
     * react-phone-input-2 normally returns the number
     * without the "+" character.
     */
    const internationalPhone = phoneValue.startsWith("+")
      ? phoneValue
      : `+${phoneValue}`;

    return parsePhoneNumberFromString(internationalPhone);
  };

  const handlePhoneChange = (phoneValue: string) => {
    setPhone(phoneValue);

    if (!phoneValue.trim()) {
      setPhoneError("");
      return;
    }

    const phoneNumber = getParsedPhoneNumber(phoneValue);

    if (phoneNumber?.isValid()) {
      setPhoneError("");
    } else {
      setPhoneError("Enter a valid phone number.");
    }
  };

  const formFieldsData = [
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

  const firstTwoFields = formFieldsData.slice(0, 2);

  const toggleCheckbox = () => {
    const newActiveBox = !activeBox;

    setActiveBox(newActiveBox);

    if (newActiveBox) {
      setTickError(false);
    }
  };

  const resetForm = () => {
    /*
     * Reset the native form inputs:
     * name, email and project description.
     */
    formRef.current?.reset();

    // Reset custom phone input
    setPhone("");
    setPhoneError("");
    setFocused(false);

    // Reset custom country input
    setCountry(null);
    setCountryError("");

    /*
     * Remount CountrySelect so its displayed
     * internal value is also cleared.
     */
    setCountrySelectKey((previousKey) => previousKey + 1);

    // Reset checkbox
    setActiveBox(false);
    setTickError(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
     * Validate the selected country.
     */
    if (!country?.name) {
      setCountryError("Select a country.");
      return;
    }

    setCountryError("");

    /*
     * Validate the privacy checkbox.
     */
    if (!activeBox) {
      setTickError(true);
      return;
    }

    setTickError(false);

    /*
     * Validate the phone number.
     */
    const parsedPhoneNumber = getParsedPhoneNumber(phone);

    if (!parsedPhoneNumber?.isValid()) {
      setPhoneError("Enter a valid phone number.");
      return;
    }

    setPhoneError("");

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("projectscope") as string | null;

    /*
     * parsedPhoneNumber.number returns an international
     * E.164 number, for example: +237690000000.
     */
    const formattedPhone = parsedPhoneNumber.number;
    const selectedCountry = country.name;

    setButtonText(t("sending"));
    setIsSubmitting(true);

    try {
      /*
       * The API route is shared by all languages.
       * Do not add currentLocale to this URL.
       */
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: formattedPhone,
          country: selectedCountry,
          message,
        }),
      });

      if (!response.ok) {
        let errorMessage = "Form submission failed.";

        try {
          const errorData = await response.json();

          if (errorData?.message) {
            errorMessage = errorData.message;
          }
        } catch {
          // The server response was not JSON.
        }

        throw new Error(errorMessage);
      }

      setButtonText(t("thankyou"));

      resetForm();
    } catch (error) {
      console.error("Error during form submission:", error);

      setButtonText(t("sorry"));
    } finally {
      setIsSubmitting(false);

      if (buttonResetTimeout.current) {
        clearTimeout(buttonResetTimeout.current);
      }

      buttonResetTimeout.current = setTimeout(() => {
        setButtonText(t("sender"));
      }, 5000);
    }
  };

  const privacyPolicyLink = currentLocale.startsWith("fr")
    ? "/fr/confidentialite"
    : "/privacy";

  return (
    <div className={styles.con__section}>
      <div className={`container ${styles.con__container}`}>
        <div className={styles.con__left}>
          <RoundText color="var(--gold)" text={t("send")} />
        </div>

        <div className={styles.con__right}>
          <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <div className={styles.form__top}>
              {firstTwoFields.map((data) => (
                <FormInput
                  data={data}
                  key={data.id}
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
                  country="cm"
                  value={phone}
                  onChange={handlePhoneChange}
                  disabled={isSubmitting}
                  inputProps={{
                    name: "phone",
                    required: true,
                    placeholder: "+237 690 000 000",
                  }}
                  onFocus={() => setFocused(true)}
                  onBlur={handleFocus}
                  data-focused={focused.toString()}
                />

                {phoneError && (
                  <span className={styles.error}>{t("phoneerror")}</span>
                )}
              </div>

              <div className={styles.form__in}>
                <span className={styles.label}>{t("country")}</span>

                <CountrySelect
                  key={countrySelectKey}
                  containerClassName="form-group"
                  inputClassName=""
                  placeHolder={t("yourcountry")}
                  onChange={(_country: unknown) => {
                    const selectedCountry = _country as SelectedCountry | null;

                    setCountry(selectedCountry);
                    setCountryError("");
                  }}
                />

                {countryError && (
                  <span className={styles.error}>{t("counerror")}</span>
                )}
              </div>
            </div>

            <div className={styles.form__bottom}>
              <FormInput data={formFieldsData[2]} isSubmitting={isSubmitting} />
            </div>

            <div className={styles.pri__button}>
              <div className={styles.tickbox}>
                <div className={styles.ticktop}>
                  <div
                    className={`${styles.tick} ${
                      activeBox ? styles.active : ""
                    }`}
                    onClick={toggleCheckbox}
                    role="checkbox"
                    aria-checked={activeBox}
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleCheckbox();
                      }
                    }}
                  >
                    <div className={styles.tbutton} />
                  </div>

                  <div className={styles.agree}>
                    <span>{t("bysending")}</span>{" "}
                    <Link href={privacyPolicyLink}>{t("poli")}</Link>
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
                  <div className={styles.round__inner} />
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
