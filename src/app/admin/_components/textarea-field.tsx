import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface TextareaFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
}

export default function TextareaField<T extends FieldValues>({
  name,
  control,
  placeholder = "",
  label = "",
  disabled = false,
}: TextareaFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className={"mb-1 text-base"}>{label}</FormLabel>}
          <FormControl>
            <Textarea
              {...field}
              disabled={disabled}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
