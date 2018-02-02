var myPromise = new Promise(function(resolve, reject) {
	// do a thing here...

	//when youre thing is done...
	if (thingWentWell) {
		resolve('Stuff worked!');
	} else {
		const uhOh = new Error('It broke');
		reject(uhOh);
	}
});

// you're probably used to creating things like this:
var aString = 'Some text in quotes here.';

var aNumber = 123456;

var anObject = {
	thisIs: 'an Object'
};

var anArray = ['this', 'one', 'is', 'an', 'array'];

var aBOOlean = true;

var aRegularExpression = /regex is cool/gi;

//But you should also know that things can be created like this:
var anotherString = String('Here is a string');

var anotherNumber = Number(123456);

var anotherObject = new Object();
anotherObject.thisIsAnother = 'object.';

var anotherArray = new Array('this', 'is', 'also', 'an', 'array');

var anotherBoolean = new Boolean(true);

var anotherRegularExpression = new RegExp('regex is cool', 'gi');

//Some other constructors you may or may not be familiar with:

Symbol;
Error;
EvalError;
InternalError;
RangeError;
ReferenceError;
SyntaxError;
TypeError;
URIError;
Function;
Date;
Map;
Set;
WeakMap;
WeakSet;
JSON;
Promise;
Generator;
GeneratorFunction;
AsyncFunction;
NodeList;
HTMLCollection;

//try this !

// create a string
const me = 'Mark';

// call this function
me.whatIsThis(); //undefined!

//Add this method to the string prototype
String.prototype.whatIsThis = function() {
	console.log(this);
};

me.whatIsThis(); // ???

me.toLowerCase(); // mark

String.prototype.toLowerCase = function() {
	return "You've been tricked!";
};

me.toLowerCase(); // ???

//try this !

const myObj = {
	name: 'mark',
	ownsDog: true
};

console.log(Object.keys(myObj)); // Keys!

console.log(Object.values(myObj)); // Values!

Object.freeze(myObj);

myObj.name = 'Alex'; // ???
myObj.someNewProperty = 'yay!'; // ???
console.log(myObj); // ?!

// Try it!
const bomb = new Promise(function(yes, no) {
	setTimeout(function() {
		yes('Boom!');
	}, 30000); //30 seconds
});

console.log(bomb); // ???

//wait around for 30seconds...
console.log(bomb); // ?!

// Try it!

const bomb = new Promise(function(yes, no) {
	setTimeout(function() {
		no('Boom!');
	}, 30000); //30 seconds
});

console.log(bomb); // ???

//wait around for 30seconds...
console.log(bomb); // ?!

// Try it!

const bomb = new Promise(function(yes, no) {
	setTimeout(function() {
		no('Bomb Malfunction!');
	}, 10000); //10 seconds
});

bomb
	.then(function(promiseResult) {
		console.log('oh no, the bomb exploded!');
		console.log('here is the result of the promise: ' + promiseResult); // ???
	})
	.catch(function(error) {
		console.log('uh oh, we are inside our .catch. something went wrong.');
		console.log('Here is the error: ' + error);
	});

// Try it!

const bomb = new Promise(function(yes, no) {
	setTimeout(function() {
		no('Bomb Malfunction!');
	}, 10000); //10 seconds
});

bomb
	.then(function(promiseResult) {
		console.log('oh no, the bomb exploded!');
		console.log('here is the result of the promise: ' + promiseResult); // ???
	})
	.catch(function(error) {
		console.log('uh oh, we are inside our .catch. something went wrong.');
		console.log('Here is the error: ' + error);
	});

//try it (in node!)

function sayHi() {
	return 'hi';
}

console.log(sayHi());

async function sayMyName() {
	return 'mark';
}

console.log(sayMyName()); // Promise is returned instead of 'mark'

sayMyName().then(function(result) {
	console.log('the result: ' + result); // The resolution of the promise!
});

//so much easier to write!

//How to handle Errors method #1:
async function uhOhAnError() {
	const err = new Error('Uh oh, everything broke!');
	throw err;

	return 'Yay everything went fine :)';
}

uhOhAnError()
	.then(function(result) {
		console.log('Everything went great!'); // This never runs :(
		console.log(result);
	})
	.catch(function(err) {
		console.log('On no, we hit an error! Here is the error: ');
		console.error(err);
		console.log('-------------');
		console.log('');
		console.log('now everything continues as normal :)');
	});

//How to handle Errors method #2:
async function uhOhAnError() {
	try {
		const err = new Error('Uh oh, everything broke!');
		throw err;

		return 'Yay everything went fine :)';
	} catch (err) {
		console.log('On no, we hit an error! Here is the error: ');
		console.error(err);
		console.log('-------------');
		console.log('');
		console.log('now everything continues as normal :)');
	}
}

uhOhAnError().then(function(result) {
	console.log('Everything went great!'); // This never runs :(
	console.log(result);
});
