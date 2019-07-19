module.exports = (p) => {
  if (p.length === 10) {
    return `(${p.substring(0,3)}) ${p.substring(3,6)}.${p.substring(6)}`;
  } else if (p.length === 11) {
    return `(${p.substring(1,4)}) ${p.substring(4,7)}.${p.substring(7)}`;
  } else {
    return 'No phone number!'
  }
}