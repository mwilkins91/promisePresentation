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
