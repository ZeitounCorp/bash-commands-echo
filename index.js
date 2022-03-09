const { bg_colors, filters, text_colors } = require('./constants');

const default_message = 'echo working';
const default_options = {
  color: 'white',
  background: 'black',
  filter: 'reset',
};

/**
 *
 * @param {string} message the message to echo
 * @param {{color?: 'black'|'white'|'green'|'yellow'|'red'|'blue'|'magenta'|'cyan', background?: 'black'|'white'|'green'|'yellow'|'red'|'blue'|'magenta'|'cyan', filter?: 'reset'|'bright'|'dim'|'underscore'|'blink'|'reverse'|'hidden'}} options styling to apply to the output
 * @returns void
 */
function echo(message = default_message, options = default_options) {
  const { color, background, filter } = options;

  const filter_code = filter ? filters[filter] : '';
  const color_code = color ? text_colors[color] : '';
  const background_code = background ? bg_colors[background] : '';

  console.log(`${filter_code}${color_code}${background_code}${message}${filters.reset}`);
  return 0;
}

module.exports = echo;
