var some = "Hello World";
for (var i = 0; i < 5; i++) {
    console.log(some);
}
var thing = "some";
var func = function () {
    thing += 'thing';
    console.log(thing);
};
func();
var func2 = function () {
    var value = 'else';
    thing = "some thing ".concat(value);
    console.log(thing);
};
func2();
// objects and notations 
var customer = {
    first_name: 'Moshe',
    last_name: 'Israeli'
};
console.log("The customer name is: ".concat(customer.first_name, " \nThe last name of the customer is : ").concat(customer.last_name));
customer.first_name = 'Egor';
customer['last_name'] = 'Pilmeni';
console.log("The customer name is: ".concat(customer.first_name, " \nThe last name of the customer is : ").concat(customer.last_name));
