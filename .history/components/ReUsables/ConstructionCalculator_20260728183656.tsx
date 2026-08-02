// "use client";

// import React, { useState } from "react";
// import RoundText from "./RoundText";
// import { useT } from "next-i18next/client";
// import DropInput from "./DropInput";
// import styles from "../../styles/ReUsables/constcalc.module.scss";

// const ConstructionCalculator = () => {
//   const { t } = useT();

//   // const [values, setValues] = useState({
//   //   area: "",
//   //   floors: "",
//   //   bfloors: "",

//   //   ptype: "",
//   //   quality: "",
//   //   loca: "",
//   // });

//   // const [errors, setErrors] = useState({
//   //   area: "",
//   //   floors: "",
//   //   bfloors: "",

//   //   ptype: "",
//   //   quality: "",
//   //   loca: "",
//   // });

//   const initialValues = {
//     area: "",
//     floors: "",
//     bfloors: "",
//     ptype: "",
//     quality: "",
//     loca: "",
//   };

//   const initialErrors = {
//     area: "",
//     floors: "",
//     bfloors: "",
//     ptype: "",
//     quality: "",
//     loca: "",
//   };

//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState(initialErrors);
//   const [formKey, setFormKey] = useState(0);

//   const validate = () => {
//     const newErrors = {
//       area: "",
//       floors: "",
//       bfloors: "",

//       ptype: "",
//       quality: "",
//       loca: "",
//     };

//     // Number Inputs
//     if (!values.area) {
//       newErrors.area = "Area is required.";
//     } else if (Number(values.area) <= 0) {
//       newErrors.area = "Area must be greater than 0.";
//     }

//     if (!values.floors) {
//       newErrors.floors = "Number of floors is required.";
//     } else if (Number(values.floors) < 1) {
//       newErrors.floors = "There must be at least one floor.";
//     }

//     if (!values.bfloors) {
//       newErrors.bfloors = "Number of basement floors is required.";
//     } else if (values.bfloors !== "" && Number(values.bfloors) < 0) {
//       newErrors.bfloors = "Basement floors cannot be negative.";
//     }

//     // Dropdowns
//     if (!values.ptype) {
//       newErrors.ptype = "Please select a project type.";
//     }

//     if (!values.quality) {
//       newErrors.quality = "Please select a quality grade.";
//     }

//     if (!values.loca) {
//       newErrors.loca = "Please select a location.";
//     }

//     setErrors(newErrors);

//     return Object.values(newErrors).every((error) => error === "");
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   const handleDropdownChange = (name: string, value: string) => {
//     setValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   const handleReset = () => {
//     setValues(initialValues);
//     setErrors(initialErrors);
//     setFormKey((k) => k + 1);
//   };

//   const formFields = [
//     {
//       id: 1,
//       name: "area",
//       label: t("area"),
//       type: "number",
//       placeholder: "300",
//       order: 0,
//     },
//     {
//       id: 2,
//       name: "floors",
//       label: t("floors"),
//       type: "number",
//       placeholder: "3",
//       order: 3,
//     },
//     {
//       id: 3,
//       name: "bfloors",
//       label: t("bfloors"),
//       type: "number",
//       placeholder: "0",
//       order: 4,
//     },
//   ];

//   const otherFields = [
//     {
//       id: 1,
//       name: "ptype",
//       order: 1,
//       label: t("ptype"),
//       error: "Please select a project type.",
//       options: [
//         {
//           id: "res",
//           name: t("res"),
//         },
//         {
//           id: "com",
//           name: "Commercial",
//         },
//         {
//           id: "ind",
//           name: t("ind"),
//         },
//         {
//           id: "inst",
//           name: t("inst"),
//         },
//         {
//           id: "health",
//           name: t("health"),
//         },
//         {
//           id: "edu",
//           name: t("edu"),
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "quality",
//       order: 2,
//       label: t("quality"),
//       error: "Please select a quality grade.",
//       options: [
//         {
//           id: "eco",
//           name: t("eco"),
//         },
//         {
//           id: "stan",
//           name: t("stan"),
//         },
//         {
//           id: "prem",
//           name: t("prem"),
//         },
//         {
//           id: "lux",
//           name: t("lux"),
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "loca",
//       order: 5,
//       label: t("loca"),
//       error: "Please select a location.",
//       options: [
//         {
//           id: "urb",
//           name: t("urb"),
//         },
//         {
//           id: "surb",
//           name: t("surb"),
//         },
//         {
//           id: "rural",
//           name: t("rural"),
//         },
//       ],
//     },
//   ];

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!validate()) return;

//     console.log(values);

//     // Perform your calculation here

//     //Reset
//   };

//   return (
//     <div className={styles.cc__section}>
//       <div className={`container ${styles.cc__container}`}>
//         <div className={styles.cc__left}>
//           <RoundText color="var(--gold)" text={t("cost")} />
//         </div>

//         <div className={styles.cc__right}>
//           <h3 className={styles.cc__h3}>{t("estimate")}</h3>

//           <p className={styles.cc__p}>{t("est2")}</p>

//           <div className={styles.cc__calc}>
//             <form
//               className={styles.former}
//               onSubmit={handleSubmit}
//               key={formKey}
//             >
//               <div className={styles.form__wrapper}>
//                 {formFields.map((field) => (
//                   <div
//                     key={field.id}
//                     className={styles.form__field}
//                     style={{ order: field.order }}
//                   >
//                     <label className={styles.label}>{field.label}</label>

//                     <input
//                       className={styles.input}
//                       type={field.type}
//                       name={field.name}
//                       value={values[field.name as keyof typeof values]}
//                       onChange={handleChange}
//                       placeholder={field.placeholder}
//                     />

//                     {errors[field.name as keyof typeof errors] && (
//                       <p className={styles.error}>
//                         {errors[field.name as keyof typeof errors]}
//                       </p>
//                     )}
//                   </div>
//                 ))}

//                 {otherFields.map((content) => (
//                   <div
//                     key={content.id}
//                     className={styles.form__field}
//                     style={{ order: content.order }}
//                   >
//                     <DropInput
//                       data={content}
//                       value={values[content.name as keyof typeof values]}
//                       error={errors[content.name as keyof typeof errors]}
//                       onChange={handleDropdownChange}
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className={styles.buttoners}>
//                 <button className={styles.buttons} type="submit">
//                   <span>Calculate Estimate</span>
//                 </button>
//                 <button className={styles.buttons} onClick={handleReset}>
//                   <span>Reset</span>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConstructionCalculator;
"use client";

import React, { useState } from "react";
import RoundText from "./RoundText";
import { useT } from "next-i18next/client";
import DropInput from "./DropInput";
import Info from "@/utils/Icons/Info";
import styles from "../../styles/ReUsables/constcalc.module.scss";

// ─── LOOKUP TABLES ────────────────────────────────────────────────────────────

const BASE_COST_MATRIX: Record<string, Record<string, number>> = {
  res: { eco: 100000, stan: 150000, prem: 175000, lux: 200000 },
  com: { eco: 120000, stan: 180000, prem: 210000, lux: 240000 },
  ind: { eco: 65000, stan: 97500, prem: 113750, lux: 130000 },
  inst: { eco: 115000, stan: 172500, prem: 201250, lux: 230000 },
  health: { eco: 160000, stan: 240000, prem: 280000, lux: 320000 },
  edu: { eco: 105000, stan: 157500, prem: 183750, lux: 210000 },
};

const LOCATION_MULTIPLIERS: Record<string, number> = {
  urb: 1.0,
  surb: 0.92,
  rural: 0.85,
};

const PROJECT_TYPE_LABELS: Record<string, string> = {
  res: "Residential",
  com: "Commercial",
  ind: "Industrial",
  inst: "Institutional",
  health: "Healthcare",
  edu: "Educational",
};

const QUALITY_LABELS: Record<string, string> = {
  eco: "Economy",
  stan: "Standard",
  prem: "Premium",
  lux: "Luxury",
};

const LOCATION_LABELS: Record<string, string> = {
  urb: "Urban",
  surb: "Suburban",
  rural: "Rural",
};

const BASEMENT_MULTIPLIER = 1.4;
const RANGE_FACTOR = 0.15;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const roundToNearest100k = (value: number) =>
  Math.round(value / 100000) * 100000;

const formatXAF = (value: number) =>
  new Intl.NumberFormat("fr-CM").format(value) + " XAF";

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface CalculationResult {
  low: number;
  high: number;
  total: number;
  costPerM2: number;
  isIndustrial: boolean;
  summary: string;
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const ConstructionCalculator = () => {
  const { t } = useT();

  const [values, setValues] = useState({
    area: "",
    floors: "",
    bfloors: "",
    ptype: "",
    quality: "",
    loca: "",
  });

  const [errors, setErrors] = useState({
    area: "",
    floors: "",
    bfloors: "",
    ptype: "",
    quality: "",
    loca: "",
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  // ─── VALIDATION ────────────────────────────────────────────────────────────

  const validate = () => {
    const newErrors = {
      area: "",
      floors: "",
      bfloors: "",
      ptype: "",
      quality: "",
      loca: "",
    };

    if (!values.area) {
      newErrors.area = "Area is required.";
    } else if (Number(values.area) <= 0) {
      newErrors.area = "Area must be greater than 0.";
    }

    if (!values.floors) {
      newErrors.floors = "Number of floors is required.";
    } else if (Number(values.floors) < 1) {
      newErrors.floors = "There must be at least one floor.";
    }

    if (!values.bfloors) {
      newErrors.bfloors = "Number of basement floors is required.";
    } else if (values.bfloors !== "" && Number(values.bfloors) < 0) {
      newErrors.bfloors = "Basement floors cannot be negative.";
    }

    if (!values.ptype) newErrors.ptype = "Please select a project type.";
    if (!values.quality) newErrors.quality = "Please select a quality grade.";
    if (!values.loca) newErrors.loca = "Please select a location.";

    setErrors(newErrors);
    return Object.values(newErrors).every((e) => e === "");
  };

  // ─── CALCULATION ───────────────────────────────────────────────────────────

  const calculate = (): CalculationResult => {
    const area = Number(values.area);
    const floors = Number(values.floors);
    const bfloors = values.bfloors === "" ? 0 : Number(values.bfloors);

    const costPerM2 = BASE_COST_MATRIX[values.ptype][values.quality];
    const locationMultiplier = LOCATION_MULTIPLIERS[values.loca];

    // Formula:
    // [ (costPerM2 × area × floors) + (costPerM2 × area × bfloors × 1.40) ] × locationMultiplier
    const aboveGroundCost = costPerM2 * area * floors;
    const basementCost = costPerM2 * area * bfloors * BASEMENT_MULTIPLIER;
    const subtotal = aboveGroundCost + basementCost;
    const total = subtotal * locationMultiplier;

    const roundedTotal = roundToNearest100k(total);
    const low = roundToNearest100k(roundedTotal * (1 - RANGE_FACTOR));
    const high = roundToNearest100k(roundedTotal * (1 + RANGE_FACTOR));

    const summary = `${QUALITY_LABELS[values.quality]} ${
      PROJECT_TYPE_LABELS[values.ptype]
    } · ${area}m² · ${floors} floor${floors > 1 ? "s" : ""}${
      bfloors > 0 ? ` · ${bfloors} basement` : ""
    } · ${LOCATION_LABELS[values.loca]}`;

    return {
      low,
      high,
      total: roundedTotal,
      costPerM2,
      isIndustrial: values.ptype === "ind",
      summary,
    };
  };

  // ─── HANDLERS ──────────────────────────────────────────────────────────────

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDropdownChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleReset = () => {
    setValues({
      area: "",
      floors: "",
      bfloors: "",
      ptype: "",
      quality: "",
      loca: "",
    });
    setErrors({
      area: "",
      floors: "",
      bfloors: "",
      ptype: "",
      quality: "",
      loca: "",
    });
    setResult(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setResult(calculate());
  };

  // ─── FIELD CONFIG ──────────────────────────────────────────────────────────

  const formFields = [
    {
      id: 1,
      name: "area",
      label: t("area"),
      type: "number",
      placeholder: "300",
      order: 0,
    },
    {
      id: 2,
      name: "floors",
      label: t("floors"),
      type: "number",
      placeholder: "3",
      order: 3,
    },
    {
      id: 3,
      name: "bfloors",
      label: t("bfloors"),
      type: "number",
      placeholder: "0",
      order: 4,
    },
  ];

  const otherFields = [
    {
      id: 1,
      name: "ptype",
      order: 1,
      label: t("ptype"),
      error: "Please select a project type.",
      options: [
        { id: "res", name: t("res") },
        { id: "com", name: "Commercial" },
        { id: "ind", name: t("ind") },
        { id: "inst", name: t("inst") },
        { id: "health", name: t("health") },
        { id: "edu", name: t("edu") },
      ],
    },
    {
      id: 2,
      name: "quality",
      order: 2,
      label: t("quality"),
      error: "Please select a quality grade.",
      options: [
        { id: "eco", name: t("eco") },
        { id: "stan", name: t("stan") },
        { id: "prem", name: t("prem") },
        { id: "lux", name: t("lux") },
      ],
    },
    {
      id: 3,
      name: "loca",
      order: 5,
      label: t("loca"),
      error: "Please select a location.",
      options: [
        { id: "urb", name: t("urb") },
        { id: "surb", name: t("surb") },
        { id: "rural", name: t("rural") },
      ],
    },
  ];

  // ─── RENDER ────────────────────────────────────────────────────────────────

  return (
    <div className={styles.cc__section}>
      <div className={`container ${styles.cc__container}`}>
        <div className={styles.cc__left}>
          <RoundText color="var(--gold)" text={t("cost")} />
        </div>

        <div className={styles.cc__right}>
          <h3 className={styles.cc__h3}>{t("estimate")}</h3>
          <p className={styles.cc__p}>{t("est2")}</p>

          <div className={styles.cc__calc}>
            <form className={styles.former} onSubmit={handleSubmit}>
              <div className={styles.form__wrapper}>
                {/* Number inputs */}
                {formFields.map((field) => (
                  <div
                    key={field.id}
                    className={styles.form__field}
                    style={{ order: field.order }}
                  >
                    <label className={styles.label}>{field.label}</label>
                    <input
                      className={styles.input}
                      type={field.type}
                      name={field.name}
                      value={values[field.name as keyof typeof values]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      min={field.name === "floors" ? 1 : 0}
                    />
                    {errors[field.name as keyof typeof errors] && (
                      <p className={styles.error}>
                        {errors[field.name as keyof typeof errors]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Dropdown inputs */}
                {otherFields.map((content) => (
                  <div
                    key={content.id}
                    className={styles.form__field}
                    style={{ order: content.order }}
                  >
                    <DropInput
                      data={content}
                      value={values[content.name as keyof typeof values]}
                      error={errors[content.name as keyof typeof errors]}
                      onChange={handleDropdownChange}
                    />
                  </div>
                ))}
              </div>

              {/* Industrial note */}
              {values.ptype === "ind" && (
                <p className={styles.cc__note}>
                  <span></span>
                  ⚠ Industrial estimates assume steel frame construction, which
                  is standard practice in Cameroon and reflects a lower cost per
                  m² than RC frame builds.
                </p>
              )}

              <div className={styles.buttoners}>
                <button className={styles.buttons} type="submit">
                  <span>Calculate Estimate</span>
                </button>
                <button
                  className={styles.buttons}
                  type="button"
                  onClick={handleReset}
                >
                  <span>Reset</span>
                </button>
              </div>
            </form>
          </div>

          {/* ─── RESULT PANEL ─────────────────────────────────────────────── */}
          {result && (
            <div className={styles.cc__result}>
              {/* Summary line */}
              <p className={styles.result__summary}>{result.summary}</p>

              {/* Cost range */}
              <div className={styles.result__range}>
                <span className={styles.result__label}>Estimated Cost</span>
                <span className={styles.result__value}>
                  {formatXAF(result.low)} — {formatXAF(result.high)}
                </span>
              </div>

              {/* Cost per m² */}
              <div className={styles.result__meta}>
                <span>Cost per m² applied:</span>
                <strong>{formatXAF(result.costPerM2)}</strong>
              </div>

              {/* Industrial note in results */}
              {result.isIndustrial && (
                <p className={styles.cc__note}>
                  ⚠ This estimate assumes steel frame construction, standard for
                  industrial projects in Cameroon.
                </p>
              )}

              {/* CTA */}
              <a href="/contact" className={styles.result__cta}>
                Get a detailed quote from CaBric Engineering
              </a>

              {/* Disclaimer */}
              <p className={styles.result__disclaimer}>
                ⚠ This estimate is based on standard RC frame construction
                benchmarks for Cameroon and is intended as a planning guide
                only. Actual costs may vary based on site conditions,
                architectural complexity, material choices, and market
                fluctuations. For industrial projects, costs assume steel frame
                construction. Contact CaBric Engineering for a detailed project
                assessment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConstructionCalculator;
