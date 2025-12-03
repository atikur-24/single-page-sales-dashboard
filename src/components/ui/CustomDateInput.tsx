import { Input } from "@/components/ui/input";
import { Calendar, X } from "lucide-react";
import { forwardRef } from "react";

interface CustomDateInputProps {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
  onClear?: () => void;
}

const CustomDateInput = forwardRef<HTMLInputElement, CustomDateInputProps>(
  ({ value, onClick, placeholder, onClear }, ref) => (
    <div className="relative">
      <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
        <Calendar className="h-4 w-4" />
      </div>
      <Input
        ref={ref}
        value={value}
        onClick={onClick}
        placeholder={placeholder}
        readOnly
        className="cursor-pointer pr-10 pl-10"
      />
      {value && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClear?.();
          }}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 transition-colors hover:text-white"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  ),
);

CustomDateInput.displayName = "CustomDateInput";

export default CustomDateInput;
