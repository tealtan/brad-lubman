export default function SectionHeader(props) {
  return (
    <>
      <h2 id={props.id}>{props.text}</h2>

      <style jsx>{`
        h2 {
          font-size: 30px;
          line-height: 32px;
          padding-top: 12px;
          margin: 0 0 30px 0;
          border-top: 5px solid #000;
          text-transform: uppercase;
          color: ${props.color};
        }

        @media screen and (min-width: 1024px) {
          h2 {
            font-size: 60px;
            line-height: 60px;
            margin: 0 0 45px 0;
          }
        }
      `}</style>
    </>
  );
}
