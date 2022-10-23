var object = {
  required: {
    check: function (valueField) {
      let val = false;
      if ($(valueField).val() == "") {
        val = true;
      } else {
        val = false;
      }
      return val;
    },
  },
  password: {
    check: function (valueField) {
      var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!regex.test(valueField)) {
        return false;
      } else {
        return true;
      }
    },
  },
  email: {
    check: function (value) {
      var regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
      if (!regex.test(value)) {
        return false;
      }
      return true;
    },
  },
  init: function () {
    valid = false;
    $("input").keyup(function () {
      if (object.required.check("#username")) {
        $("#usercheck").html("Please enter your username");
      }
      if (object.required.check("#email")) {
        $("#emailcheck").html("Please enter your email");
      } else if (object.email.check("#email") == false) {
        $("#emailcheck").html("Please enter a valid email address");
      }
      if (object.required.check("#password")) {
        $("#passcheck").html("Please enter your password");
      } else if (object.password.check("#password") == false) {
        $("#passcheck").html("Please enter a valid password");
      } else {
        valid = true;
      }
      if (valid == true) {
        $("#submit").click(function () {
          $(".error").hide();
          $("form").serialize();
        });
      }
    });
  },
};
$(document).ready(function () {
  object.init();
});
