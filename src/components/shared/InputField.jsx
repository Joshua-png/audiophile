import PropTypes from "prop-types"

function InputField({ label, name, type, placeholder, value, onChange, error, errorMessage, min }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor={label} className={`text-12px font-bold ${error && "text-error"}`}>{label}</label>
        {error && <p className="text-error text-xs font-medium">{errorMessage}</p>}
      </div>
      <input
        id={label}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min ? min : 0}
        className={`p-4 border border-opacity-50 rounded-lg hover:border-primary focus:outline-none focus:border-primary cursor-pointer ${error && "border-error border-2"}`}
        style={{ caretColor: "#D87D4A" }}
      />
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  min: PropTypes.number
}

export default InputField