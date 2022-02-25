export const fromUkDate = (dateString) => {
  var splitDate = dateString.split('/');
  var month = splitDate[1] - 1;

  return new Date(splitDate[2], month, splitDate[0]);
}

export const toUkDate = (dateObject) => {
  var dateList = [
    padZeros(dateObject.getDate()),
    padZeros(dateObject.getMonth() + 1),
    dateObject.getFullYear()
  ];

  return dateList.join('/')
}

const padZeros = (number) => {
  var numString = parseInt(number);
  return number < 10 ? "0".concat(numString) : numString
}