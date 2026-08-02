"use client";

import React, { useState, useEffect, useRef } from "react";
import Chevron from "@/utils/Icons/Chevron";
import styles from "../../styles/ReUsables/dropinput.module.scss";

interface DataProps {
  id: number;
  name: string;
  order: number;
  label: string;
  error: string;
  options: {
    id: string;
    name: string;
  }[];
}

const DropInput = ({
  data,
  value,
  error,
  onChange,
}: {
  data: DataProps;
  value: string;
  error: string;
  onChange: (name: string, value: string) => void;
}) => {
  const [activeDrop, setActiveDrop] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
      if (!activeDrop) return;

      const el = targetRef.current;

      if (el && !el.contains(e.target as Node)) {
        setActiveDrop(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [activeDrop]);

  const dropText =
    data.options.find((option) => option.id === value)?.name ?? "Select";

  return (
    <div className={styles.input__wrap} ref={targetRef}>
      <span className={styles.label}>{data.label}</span>

      <div className={styles.drop__wrap}>
        <div
          className={styles.drop__box}
          onClick={() => setActiveDrop(!activeDrop)}
        >
          <div className={styles.innerr}>
            <span className={styles.spanner}>{dropText}</span>

            <span className={styles.svg}>
              <Chevron />
            </span>
          </div>
        </div>

        <div
          className={`${styles.dropdown} ${activeDrop ? styles.active : ""}`}
        >
          {data.options.map((option) => (
            <div
              className={styles.option}
              key={option.id}
              onClick={() => {
                onChange(data.name, option.id);
                setActiveDrop(false);
              }}
            >
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      </div>

      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default DropInput;
