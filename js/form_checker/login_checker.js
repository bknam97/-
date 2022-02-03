
var current_path= "/js/form_checker/login_checker.js" ;
console.info("Called %s", current_path);

function login()
{
  var login_form = document.login_info_form;
  var id_ = login_form.sign_form_id_input.value;
  var pw_ = login_form.sign_form_pw_input.value;

  console.log("id: %s", id_);
  console.log("pw: %s", pw_);

  //TODO: mongodb
  location.href='home.html';
}
