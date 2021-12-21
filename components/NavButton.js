export default function NavButton(props) {
  return (
    <>
      <a href={props.link}>{props.text}</a>

      <style jsx>{`
        a {
          display: block;
          padding: 14px 15px;
          margin: 5px 15px;
          font-size: 18px;
          line-height: 22px;
          font-weight: 700;
          text-transform: uppercase;
          color: #fff;
          transition: color 0.2s;
          background-color: ${props.bgColor};
        }

        @media screen and (min-width: 1024px) {
          a {
            width: 242px;
            margin: 0;
          }
        }

        a:visited {
          color: #fff;
        }
        a:hover {
          color: #f3f3f3;
        }
      `}</style>
    </>
  )
}
