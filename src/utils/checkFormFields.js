function checkFileds(email,password){

  const check = !(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test())?"email ":true;
  const len=!(password.length>=8)?"password":true
  return len||check||true
}
export default checkFileds