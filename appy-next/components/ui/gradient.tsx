import { clsx } from "clsx";

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-800 from-neutral-50 to-neutral-50"
      )}
    />
  );
}

export function GradientBackground({ className }: { className?: string }) {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          "absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0",
          "bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900",
          "rotate-[-10deg] rounded-full blur-3xl",
          className
        )}
      />
    </div>
  );
}
