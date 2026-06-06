import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { PhoneMockup } from "@/components/mockups/PhoneMockup";
import { SocialProof } from "@/components/waitlist/SocialProof";
import { getSignupCount } from "@/lib/waitlist";

export async function Hero() {
  const count = await getSignupCount();

  return (
    <section className="hero">
      <div className="copy">
        <div className="eyebrow rv d2">
          <b />
          Coming soon · waitlist open
        </div>
        <h1 className="rv d2">
          Dir <span className="o">himma</span>.
        </h1>
        <p className="lead rv d3">
          The app that turns your study hours into a friendly competition with
          your class. You, your friends, the leaderboard — and zero fake scores.
        </p>

        <div className="rv d3">
          <SocialProof count={count} />
        </div>

        <div className="card rv d4">
          <WaitlistForm />
        </div>
      </div>

      <PhoneMockup />
    </section>
  );
}
