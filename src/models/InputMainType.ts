
interface InputMainType {
  children?: JSX.Element | React.ReactNode | null;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  type?: string;
  onKeyDown?: () => void;
  value: string ;
  onChange: (value: string) => void;
  className?: string;
  autofocus?: boolean;
}

export type {InputMainType} 