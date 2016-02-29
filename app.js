$(document).ready(function() {

//stop default event of putting info in url
$('#employeeForm').on('submit', function(event){
  event.preventDefault();


//create object that holds the values entered
var empValues = {};

//create object from values entered
$.each($('#employeeForm').serializeArray(), function(i, field){
  empValues[field.name] = field.value;
});

//clears out the form
$('#employeeForm').find('input[type=text]').val('');

//push the entered values from the employeeArray into an empty object (empValues)
employeeArray.push(empValues);

//declares monthly salary function
monthlySal();

});

monthlySal();
});

// declares an empty array to be filled with info from what the employee entered!
var employeeArray = [];

//calculate monthly salary expense and make it a digit instead of string.
function monthlySal(){
  //declare salary variable
  var salary = 0;
  for(i = 0; i < employeeArray.length; i++){
  //declares the employee variable
    var employee = employeeArray[i];
    salary += Math.round(parseInt(employee.salary/12));
  }
  //declare the function to all the info to the DOM
  addToDom();

  //show each employee entry in an unordered list and append it to the resultsEmployee div in html
  function addToDom(){
    $('.resultsEmployee').append('<ul class="employeeInfo"</ul>');
//set var $el so that things are less messy
    var $el = $('.resultsEmployee').children().last();

    $el.append('<h3>' + employee.employeeFirst + ' ' + employee.employeeLast + '</h3>');
    $el.append('<li>' + employee.employeeID + '</li>');
    $el.append('<li>' + employee.jobTitle + '</li>');
    $el.append('<li>' + employee.salary + '</li>');

// delete button to get rid of employee
    $el.append('<button class="delete">SEE YA LATER</button>');

  }

    function deleteIT(){
      $(this).parent().remove();
    }

  //show updated total append to DOM
  $('.monthlySalary').text(salary + ' dollars per month! WOW.');

  //delete it through the deleteIT function!
  $('.resultsEmployee').on('click', '.delete', deleteIT);


}
