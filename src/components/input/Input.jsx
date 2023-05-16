import "./Input.css"

const Input = ({value, type, onChange, min, max, placeholder, id}) => {
  return (
    <input className="input" id={id} type={type ? type : "button"} placeholder={placeholder} value={value} onChange={onChange} min={min} max={max} />
  )
}

export default Input