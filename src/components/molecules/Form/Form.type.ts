// File: Form.type.ts
import { FormEvent, ChangeEvent } from "react";

export type TForm = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; // Thêm prop optional disabled
};
