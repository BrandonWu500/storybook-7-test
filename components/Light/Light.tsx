import { VariantProps, cva } from "cva";

const styles = cva("rounded-full w-10 h-10", {
  variants: {
    intent: {
      primary: "bg-green-500",
      secondary: "bg-yellow-500",
      danger: "bg-red-500",
    },
    outline: {
      true: "bg-transparent border-2",
    },
    fullWidth: {
      true: "w-20",
    },
  },
  defaultVariants: {
    intent: "primary",
    fullWidth: false,
  },
  compoundVariants: [
    {
      intent: ["danger", "primary"],
      outline: true,
      class: "border-red-500",
    },
  ],
});

interface Props extends VariantProps<typeof styles> {
  label?: string;
}

// some comment
const Light = ({ intent, fullWidth, outline, ...props }: Props) => {
  return (
    <div className={styles({ intent, fullWidth, outline })}>{props.label}</div>
  );
};
export default Light;
