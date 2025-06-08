"use client";

import { StyledInputField } from "./CustomInputField.style";

const CustomInputField = ({ disabled = false, ...props }) => (
  <StyledInputField disabled={disabled} {...props} />
);

export default CustomInputField;
