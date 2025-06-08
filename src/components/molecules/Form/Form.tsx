import React from "react";
import CustomButton from "@/components/atom/CustomButton/CustomButton";
import CustomInputField from "@/components/atom/CustomInputField/CustomInputField";
import { TForm } from "./Form.type";

const FormComponent = ({ onSubmit, value, onChange }: TForm) => {
  return (
    <form style={{ display: "flex" }} onSubmit={onSubmit}>
      <CustomInputField
        name="message"
        placeholder="Ask F1GPT anything..."
        value={value}
        onChange={onChange}
        required
      />
      <CustomButton title="Submit" type="submit" />
    </form>
  );
};

export default FormComponent;
