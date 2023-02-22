"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, children, ...props }, ref) => (
  <SwitchPrimitives.Root
    className="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-base-200 data-[state=checked]:bg-brand-primary dark:focus:ring-brand-primary dark:focus:ring-offset-base-700 dark:data-[state=unchecked]:bg-base-700 dark:data-[state=checked]:bg-brand-primary"
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className="pointer-events-none flex items-center justify-center h-5 w-5 rounded-full bg-base-200 dark:bg-base-900 shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-5">
      {children}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
