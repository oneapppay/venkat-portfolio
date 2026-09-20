export function SectionTitle({
  id,
  lead,
  accent,
}: {
  id: string
  lead: string
  accent?: string
}) {
  return (
    <h2 id={id}>
      {lead}
      {accent ? (
        <>
          {" "}
          <span className="accent-text">{accent}</span>
        </>
      ) : null}
    </h2>
  )
}
