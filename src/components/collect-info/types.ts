export interface FormData {
  name: string;
  email: string;
}

export interface FormProps {
  isLoading: boolean;
  formData: FormData;
  onFormChange: (field: keyof FormData, value: string) => void;
}