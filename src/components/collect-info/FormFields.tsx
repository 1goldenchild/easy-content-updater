import { Input } from "@/components/ui/input";
import { FormProps } from "./types";

const FormFields = ({ formData, onFormChange }: FormProps) => {
  return (
    <>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-white/70 mb-2"
        >
          Full Name
        </label>
        <Input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => onFormChange("name", e.target.value)}
          className="w-full"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-white/70 mb-2"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => onFormChange("email", e.target.value)}
          className="w-full"
          placeholder="Enter your email"
        />
      </div>
    </>
  );
};

export default FormFields;