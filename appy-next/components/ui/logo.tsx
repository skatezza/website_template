import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
    </div>
  );
}
