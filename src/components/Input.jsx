function Input({ label, handleChange }) {
  return (
    <div>
      <label>
        {label}
        <input type="text" onChange={handleChange} />
      </label>
    </div>
  )

}

export default Input;