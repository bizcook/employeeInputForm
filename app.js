$(document).ready(function() {

//stop default event of putting info in url
$('#employeeForm').on('submit', function(event){
  event.preventDefault();


//create array that holds the values entered
var empValues = {};

//test
console.log($('#employeeForm').serializeArray());

//create object from values entered
$.each($('#employeeForm').serializeArray(), function(i, field){
  empValues[field.name] = field.value;
});

//clears out the form
$('#employeeForm').find('input[type=text]').val('');

//push the entered values into an empty array
employeeArray.push();

//declares monthly salary function
monthlySal();

});
monthlySal();
});

// declares an empty array to be filled with info
var employeeArray = [];

//calculate monthly salary expense and make it a digit instead of string.
function monthlySal(){
  var salary = 0;
  for(i = 0; i < employeeArray.length; i++){
    var employee = employeeArray[i];
    salary += parseInt(employee.salary/12);

  }


  //show each employee entry in an unordered list
  function addToDom(){
    $('.resultsEmployee').append('<ul class="employeeInfo"</ul>');

    var $el = $('.resultsEmployee').children().last();

    $el.append('<h3>' + employeeArray.employeeFirst + ' ' + employeeArray.employeeLast + '</h3>');
    $el.append('<li>' + employeeArray.employeeID + '</li>');
    $el.append('<li>' + employeeArray.jobTitle + '</li>');
    $el.append('<li>' + employeeArray.salary +  + '</li>');

// delete button to get rid of employee
    $el.append('<button class="delete">SEE YA LATER</button>');

  }

  addToDom();

    function deleteIT(){
      $(this).parent().remove();
    }

  //show updated total append to DOM
  $('.monthlySalary').text('$' + salary + ' per month! WOW.');

  //delete it allllllll
  $('.resultsEmployee').on('click', '.delete', deleteIT);


}
