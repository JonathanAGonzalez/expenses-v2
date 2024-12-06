import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline ",
  variants: {
    color: {
      "brand-white": "#E6E6E6",
      "brand-gradient-white-to-gray": "from-[#FFFFFF] to-[#E5E5E5]",
    },
    size: {
      sm: "text-[14px]",
      md: "text-[20px]",
      lg: "text-[25px]",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["brand-white", "brand-gradient-white-to-gray"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
