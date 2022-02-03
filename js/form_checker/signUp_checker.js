var current_path= "/js/form_checker/sign_checker.js" ;
console.log("Called %s", current_path);

function join()
{
  //입력한 정보의 유효성 검사
  var form = document.sign_up_form;
  var email = form.input_email.value;
  var pw1 = form.input_pw.value;
  var pw2 = form.input_pw_match.value;
  if(pw1 !== pw2)
  {
    console.log("입력하신 비밀번호가 서로 맞지 않습니다.")
  }
  var name = form.input_name.value;
  var birthday = form.input_birthday.value;
  var nation_num = form.nation_num.value;
  var phone_num = form.input_phone_num.value;

  console.log(email)
  console.log(pw)
  console.log(name)
  console.log(birthday)
  console.log(nation_num)
  console.log(phone_num)

  // TODO: mongodb

  location.href='home.html';
}
