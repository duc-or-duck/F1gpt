import { TForm } from "./Form.type";
import { StyledForm, StyledInput } from "./Form.style";
import CustomButton from "@/components/atom/CustomButton/CustomButton";
import CustomInputField from "@/components/atom/CustomInputField/CustomInputField";

const FormComponent = ({ onSubmit }: TForm) => {
  return (
    <form action={onSubmit}>
      <CustomInputField
        name="message"
        placeholder="Ask F1GPT anything..."
        required
      />
      <CustomButton title="Submit" type="submit" />
    </form>
  );
};

export default FormComponent;
