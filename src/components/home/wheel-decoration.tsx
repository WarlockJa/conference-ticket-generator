import { cn } from "@/lib/utils";

export default function WheelDecoration({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute aspect-square h-[24vmin] rounded-full border opacity-10",
        "before:content-[' '] before:border-border before:absolute before:inset-0 before:m-auto before:aspect-square before:w-1/2 before:rounded-full before:border",
        className,
      )}
    ></div>
  );
}
