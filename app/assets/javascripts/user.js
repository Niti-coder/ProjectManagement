jQuery(function ($) {
  var response;
    $.validator.addMethod(
      "userPasswordFormat",
      function(value, element) {
        return value.match(/^(?=.*[A-Za-z])(?=.*\d).{8,14}$/);
    });

    $.validator.addMethod(
      "alphabetsnspace",
       function(value, element) {
       return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
  });

  $('#msform').validate({
    rules: {
      'user[email]': {
        required: true,
        email: true 
      },
      'user[password]': {
        required: true,
        userPasswordFormat: true,
      },
      'user[password_confirmation]': {
        required: true,
        equalTo: "#user_password"
      },
    },
    messages: {
     'user[email]': {
      required: "Please enter your email name",
      email: "Please enter valid Email"
    },
   'user[password]': {
      required: "Please enter a password",
      userPasswordFormat: "Password must be Minimum 8 and Maximum 15 characters long and contain at least 1 Alphabet and 1 Number",
    },
    'user[password_confirmation]':  {
      required: "Please enter a confirm password",
      equalTo: "password and confirm password does not match.",
    },
  },
  });
});

