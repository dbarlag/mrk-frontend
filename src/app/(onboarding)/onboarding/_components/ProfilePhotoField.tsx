"use client";

import { useEffect, useId, useRef, useState } from "react";
import { XMarkIcon } from "@navikt/aksel-icons";
import styles from "./onboarding.module.css";

/**
 * Round profile photo picker. A native file input (name="profilbilde") sits
 * behind the placeholder, so selection works without JavaScript; with
 * JavaScript the chosen photo is previewed and can be removed.
 */
export function ProfilePhotoField() {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setPreview(file ? URL.createObjectURL(file) : null);
  }

  function handleRemove() {
    if (inputRef.current) inputRef.current.value = "";
    setPreview(null);
  }

  return (
    <div className={styles.photo}>
      <label htmlFor={id} className={styles.photoFrame}>
        {/* eslint-disable-next-line @next/next/no-img-element -- local preview from an object URL */}
        <img
          src={preview ?? "/onboarding/upload-placeholder.png"}
          alt=""
          className={styles.photoImage}
        />
        <span className={styles.visuallyHidden}>
          {preview ? "Bytt profilbilde" : "Last opp profilbilde"}
        </span>
      </label>
      <input
        ref={inputRef}
        id={id}
        type="file"
        name="profilbilde"
        accept="image/*"
        className={styles.visuallyHidden}
        onChange={handleChange}
      />
      {preview && (
        <button type="button" className={styles.photoRemove} onClick={handleRemove}>
          <XMarkIcon aria-hidden fontSize="1.33rem" />
          <span className={styles.visuallyHidden}>Fjern profilbilde</span>
        </button>
      )}
    </div>
  );
}
