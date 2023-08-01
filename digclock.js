function getdating() {
  let total = new Date();
  let year = total.getFullYear();
  let month = total.getMonth();
  let day = total.getDate();
  let hour = total.getHours();
  let minute = total.getMinutes();
  let second = total.getSeconds();
  let status;
  if (month < 10)
    month = '0' + month;
  if (day < 10)
    day = '0' + day;
  if (hour < 12)
    status = 'AM';
  else status = 'PM';
  if (hour < 10)
    hour = '0' + hour;
  if (minute < 10)
    minute = '0' + minute;
  if (second < 10)
    second = '0' + second;
  
  let result = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second + ' ' + status;
  
  return result;
}

setInterval(() => {
  let Current = getdating();
  date.innerHTML = Current;
}, 1000)

let boxes = document.getElementById("box1");
