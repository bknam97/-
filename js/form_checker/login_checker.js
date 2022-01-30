var current_path= "/js/form_checker/login_checker.js" ;
console.info("Called %s", current_path);

function login()
{
  //입력한 정보의 유효성 검사
  var login_form = document.login_info_form;
  var id_ = login_form.sign_form_id_input.value;
  var pw_ = login_form.sign_form_pw_input.value;
  console.log(id_);
  if(id_ === "" || pw_ === "")
  {
    //id는 영어만..
    alert("입력하신 아이디와 비밀번호를 확인해주세요.");
  }
  else
  {
    login_form.submit();
  }
}