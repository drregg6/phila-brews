const formatTime = (d) => {
  let returnD = d.toUpperCase();
  // adds :00 after numbers without any colon
  if (d.indexOf(':') === -1) {
    returnD = returnD.replace(/([\d]+)/, '$1:00');
  }
  // adds space between 4:00AM
  if (returnD.indexOf(' ') === -1) {
    returnD = returnD.replace(/([A-Z])/, ' $1').trim();
  }
  return returnD; 
  // return HH:mm AM/PM
}

module.exports = formatTime;