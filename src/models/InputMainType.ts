
interface InputMainType {
  children?: any;
  placeholder?: string;
  name?: string;
  autoComplete?: string;
  required?: boolean;
  autoFocus?: any;
  type?: any;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

export type {InputMainType} 