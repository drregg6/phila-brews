const DAYS = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

const isCurrentlyOpen = (hours) => {
  const workingObj = {};
  // currentDate is the date when user renders Brewery Component
  const currentDate = new Date();
  let currentDay = currentDate.getDay();

  // sets currentDay back one day if user is between midnight and 3
  if (currentDate.getHours() < 3) {
    if (currentDay !== 0) {
      currentDay = currentDay - 1;
    } else {
      currentDay = 6;
    }
  }
  const day = DAYS[currentDay];
  // create new obj based on the day
  for (let key in hours) {
    if (key.indexOf(day) !== -1) {
      if (key.indexOf('Is') !== -1) {
        workingObj['isOpen'] = hours[key];
      } else if (key.indexOf('Close') !== -1) {
        workingObj['close'] = hours[key];
      } else if (key.indexOf('Open') !== -1) {
        workingObj['open'] = hours[key]
      }
    }
  }

  // check isOpen
  if (!workingObj.isOpen) {
    return false;
  }

  // set openTime and closeTime
  // they are converted into DateTime strings
  // which compare nicely with the new Date() obj
  let openTime = dateObj(workingObj.open);
  let closeTime = dateObj(workingObj.close);

  // currentDate should land between closeTime and openTime
  if (currentDate < closeTime && currentDate > openTime) {
    return true;
  }
  return false;
}

const dateObj = d => {
  let parts = d.split(/:|\s/);
  let date = new Date();
  // parts format ["HH", "MM", "AM/PM"]

  // if closing time is midnight, set it to 0 instead of 12
  if (parts[0] === '12' && parts[2].toLowerCase() === 'am') {
    parts[0] = '0';
  }
  // or else, convert pm times to 24 hr clock
  if (parts[2].toLowerCase() === 'pm' && parts[0] !== '12') {
    parts[0] = (+parts[0]) + 12;
  }

  // place the new 24 hr times into the date so we can easily compare
  date.setHours(+parts.shift());
  // set date a day in the future if it remains open past midnight
  if (date.getHours() === 0 || date.getHours() === 1 || date.getHours() === 2) {
    date.setDate(date.getDate() + 1);
  }
  date.setMinutes(+parts.shift());
  return date;
}

module.exports = isCurrentlyOpen;