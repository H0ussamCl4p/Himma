// Social proof shown next to the signup form. Shows a real count once the
// list is big enough; below that it uses scarcity copy instead (a tiny number
// hurts more than it helps).

const MIN_COUNT_TO_SHOW = 20;

const AVATARS = [
  { initial: "Y", color: "#7FB3A0" },
  { initial: "S", color: "#C58BD1" },
  { initial: "M", color: "#E0A24B" },
];

export function SocialProof({ count }: { count: number | null }) {
  const showNumber = count !== null && count >= MIN_COUNT_TO_SHOW;

  return (
    <div className="social">
      <span className="avs" aria-hidden="true">
        {AVATARS.map((a) => (
          <span key={a.initial} style={{ background: a.color }}>
            {a.initial}
          </span>
        ))}
      </span>
      <span className="txt">
        {showNumber ? (
          <>
            <b>{count!.toLocaleString("en-US")}+ students</b> already on the list
          </>
        ) : (
          <>
            Be in the <b>first batch</b> at your school
          </>
        )}
      </span>
    </div>
  );
}
