import PropTypes from "prop-types";

// CSS
import "./index.css";

const Button = ({
  onClick,
  disabled = false,
  active = false,
  children,
  label = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={active ? "active" : ""}
      aria-label={label}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
};

export default Button;
