import { BrandMark } from "@/components/brand/Mascot";

export function Nav() {
  return (
    <nav className="rv d1">
      <div className="brand">
        <BrandMark />
        <span>himma</span>
      </div>
      <div className="tag">For Moroccan students</div>
    </nav>
  );
}
