import React, { useState } from "react";

export default function useFormValidate(initialForm, validate) {
  let [form, setForm] = useState(initialForm);
  let [error, setError] = useState({});

  function inputChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function check() {}

  return form, error, inputChange, check;
}
