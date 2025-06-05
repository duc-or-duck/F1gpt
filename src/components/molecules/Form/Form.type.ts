export type TForm = {
  onSubmit: (formData: FormData) => Promise<void> | void;
};
