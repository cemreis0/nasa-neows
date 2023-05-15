import "./Anchor.css"

const Anchor = ({type, href, value, target, rel}) => {
  return (
    <a className="anchor" type={type ? type : "button"} href={href} target={target} rel={rel}>{value}</a>
  )
}

export default Anchor