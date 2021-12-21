export default function Section(props) {
  return (
    <>
      <section className="section">{props.children}</section>

      <style jsx>{`
        .section {
          padding: 30px 20px;
        }
        @media screen and (min-width: 1024px) {
          .section {
            padding: 45px 0;
          }
        }
      `}</style>
    </>
  )
}
