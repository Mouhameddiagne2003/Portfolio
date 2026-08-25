import PropTypes from 'prop-types';

export default function ShinyText({ text, speed = 3.2, className = '' }) {
  return (
    <span
      className={`shiny-text ${className}`.trim()}
      style={{ '--shiny-duration': `${speed}s` }}
    >
      {text}
    </span>
  );
}

ShinyText.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
  className: PropTypes.string
};
