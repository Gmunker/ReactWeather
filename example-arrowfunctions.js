
var names = ['Greg', 'April', 'Joe', 'Mark'];

//names.forEach(function(name) {console.log('forEach', name)});

//names.forEach((name) => {console.log(name)});

//names.forEach((name) => console.log('new output', name));



//var returnMe = (name) => console.log(name + '!');
//console.log(returnMe('Greg'));

//var person = {
//    name: 'Greg',
//    greet: function() {
//        names.forEach((name) => console.log(this.name + ' says hi to' + name));
//    }
//};

//person.greet();

//challange area

//function add(a, b) {
//    return a + b;
//}
//console.log(add(1,3));

var addStatement = (a,b) => a + b;
console.log(addStatement(2,5));

var addExpression = ((a,b) => {console.log(a + b)});
addExpression(10, 22);
addExpression(200, 300);
