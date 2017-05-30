/**
 * step 1
 */
console.log('************step 1**************');
for (var i = 0; i < 5; i++) {
	console.log(i);
}

/**
 * step 2
 */
console.log('************step 2**************');
for (var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, 1000 * i);
}

/**
 * step 3
 */
console.log('************step 3**************');
for (var i = 0; i < 5; i++) {
	(function(i) {
		setTimeout(function() {
			console.log(i);
		}, 1000 * i);
	})(i);
}

/**
 * step 4
 */
console.log('************step 4**************');
for (var i = 0; i < 5; i++) {
	(function() {
		setTimeout(function() {
			console.log(i);
		}, 1000 * i);
	})(i);
}

/**
 * step 5
 */
console.log('************step 5**************');
for (var i = 0; i < 5; i++) {
	setTimeout((function(i) {
		console.log(i);
	})(i), 1000 * i);
}

/**
 * step 6
 */
console.log('************step 6**************');
setTimeout(function() {
	console.log(1);
}, 0);
new Promise(function executor(resolve) {
	console.log(2);
	for (var i = 0; i < 10000; i++) {
		i == 9999 && resolve();
	}
	console.log(3);
}).then(function() {
	console.log(4);
});
console.log(5);