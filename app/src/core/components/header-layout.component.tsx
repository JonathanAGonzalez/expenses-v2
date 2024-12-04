import { DropdownAvatar } from "./dropdown-avatar.component";

import { title } from "@/components/primitives";

export const HeaderLayout = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1
        className={title({
          color: "lightColor",
          size: "lg",
        })}
      >
        WalletBear
      </h1>
      <DropdownAvatar />
    </header>
  );
};
