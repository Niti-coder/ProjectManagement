$(document).ready(function () {
  $('#pro').validate({
    rules: {
      'product[name]': {
        required: true
       },
      'product[price]': {
        required: true,
        number: true
       },
      'product[description]': {
        required: true
       },
    },
    messages: {
     'product[name]': {
      required: "please enter product name"
     },
     'product[price]': {
      required: "please enter a price",
      number: "please enter valid price"
     },
     'product[description]':  {
      required: "please enter description"
     },
    },
  });
});

 