import PropTypes from "prop-types";

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
}

Popular.propTypes = {
  children: PropTypes.object,
}

Popular.defaultProps = {
  children: {}
}

export default Popular;
