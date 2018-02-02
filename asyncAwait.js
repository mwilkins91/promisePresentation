/**
 * This function returns a promise that will resolve in a random amount of time (between 1 and 10 seconds)
 */
function randomTime() {
	const numberOfSeconds = Math.floor(Math.random() * 10) + 1; // random number between 1 and 10;
	const numberOfMiliseconds = numberOfSeconds * 1000;
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			resolve(
				`${numberOfSeconds} seconds have elapsed! randomTime has completed!`
			);
		}, numberOfMiliseconds);
	});
}

// ------------------------------------------------------------------------------------------------------------

// -- The old way -- //

function test() {
	// run randomTime, and give it a .then to call when it finishes
	randomTime().then(function(result) {
		//write a function to be called by .then, using the result variable
		console.log(result); //Yay! We did it! This would probably suck if we had to perform multiple asynchronous tasks!
	});
}

// -- the problem -- //

//what if we had to wait for multiple randomTime calls to complete?
// function test() {
// 	// we make our first call
// 	randomTime().then(function(result) {
// 		console.log('the first one is done');
// 		// we make our second call
// 		randomTime().then(function(result2) {
// 			console.log('the second one is done');
// 			// we make our third call...
// 			randomTime().then(function(result3) {
//                 // finally we do whatever we need to do.
//                 // * This is messy *!
// 				console.log('All 3 randomTimes have completed!');
// 				console.log('result 1: ' + result);
// 				console.log('result 2: ' + result2);
// 				console.log('result 3: ' + result3);
// 			});
// 		});
// 	});
// }

// -- The new way --/

// async function test() {
// 	// run randomTime(), wait for it to finish, and store the result in a variable
// 	const result = await randomTime();
// 	console.log(result); // Yay! So easy!
// }

// -- the payoff -- //

// async function test() {
// 	// run randomTime(), wait for it to finish, and store the result in a variable
// 	const result = await randomTime();
// 	console.log('the first one is done');

// 	const result2 = await randomTime();
// 	console.log('the second one is done');

// 	const result3 = await randomTime();

// 	console.log('All 3 randomTimes have completed!');
// 	console.log('result 1: ' + result);
// 	console.log('result 2: ' + result2);
// 	console.log('result 3: ' + result3);
// }

// -- Lastly, Promise.all() -- //
// async function test() {
// 	// make all our requests at once, store the promises
// 	const resultProm = randomTime();
// 	console.log('the first one is requested');

// 	const result2Prom = randomTime();
// 	console.log('the second one is requested');

// 	const result3Prom = randomTime();
// 	console.log('the third one is requested');

// 	console.log('Now we wait for all our requests to finish!');
// 	const [result, result2, result3] = await Promise.all([
// 		resultProm,
// 		result2Prom,
// 		result3Prom
// 	]);

// 	console.log('All 3 randomTimes have completed!');
// 	console.log('result 1: ' + result);
// 	console.log('result 2: ' + result2);
// 	console.log('result 3: ' + result3);
// }

//now try with console.time('that took'); console.timeEnd('that took');

// go!
test();
