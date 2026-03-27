import './input.scss'

const Input = ({ type, name, value, onChange, labelFor, label }) => 
{
  return (
    <>
      <label htmlFor={labelFor}>{label}</label>
      <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="input"
      />
    </>
  )
}

export default Input
