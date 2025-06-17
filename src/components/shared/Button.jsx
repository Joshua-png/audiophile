import PropTypes from 'prop-types'

function Button({ text, type, onClick, variant = "primary", disabled = false }) {
  let styles;

  switch (variant) {
    case "primary":
      styles = "text-white bg-primary border border-transparent hover:bg-primary-light"
      break
    case "secondary":
      styles = "text-black bg-white border border-black border-inset hover:bg-black hover:text-white"
      break
    case "tertiary":
      styles = "text-white bg-black border border-black border-inset hover:bg-gray-600 hover:border-gray-600"
      break
    case "transparent":
      styles = "text-black bg-transparent border border-black border-inset hover:bg-black hover:text-white"
      break
    default:
      styles = "text-white bg-primary"
  }

  return (
    <button 
      className={`uppercase tracking-1px font-bold min-w-40 text-13px py-4 max-h-12 flex items-center justify-center ${styles} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`} 
      type={type} 
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.bool
}

export default Button