import PropTypes from 'prop-types';

function ContentWrapper({ children }) {
  return (
    <div className="mx-6 md:px-10 md:max-w-196.5 md:mx-auto lg:max-w-277.25 lg:px-0">
      {children}
    </div>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentWrapper