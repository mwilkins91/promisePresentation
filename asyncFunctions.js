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
