// Write your solution in this file!

// declare customerName to be bob in global scope
// returns the customerName
var customerName = 'bob';
const leastFavoriteCustomer = 'gary';

// modifies the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
// setBestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}
// overwrites the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
// unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'joey'
}
