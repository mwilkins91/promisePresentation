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
