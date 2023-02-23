function checkAge(age) { 
  return (age > 18) ? true : confirm('Родители разрешили?')
}

function checkAge(age) { 
  let result = age > 18;
  result === true || confirm('Родители разрешили?');
  return result;
}