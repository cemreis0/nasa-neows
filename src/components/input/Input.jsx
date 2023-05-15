import "./Input.css"

const Input = ({value, type, onChange, min, max}) => {
  return (
    <input className="input" type={type ? type : "button"} value={value ? value : "Input"} onChange={onChange} min={min} max={max} />
  )
}

export default Input