$(function() {

  var login = $("#loginButton");
  var username = $("#username");
  var password = $("#password");

  var register = $("#createAccountSubmit");
  var createUsername = $("#createUsername");
  var createPassword = $("#createPassword");


  login.click (function() {
     loginSuccessful();
  })


  // login.click(function() {
  //   socket.emit('user_login', {
  //     username: username.val(),
  //     password: password.val()
  //   })
  // })


 });
