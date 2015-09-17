//console.log(_)
//angular.module

// _.map

// var myArray = [1, 7, 15, 2]

// var result = myArray.map(function(el) {
// 	//console.log(el)
// 	return el * 2
// })

// console.log(myArray)
// console.log(result)



// var underscoreResult = _.map(myArray, function(el) {
// 	return el * 2
// })
// console.log(underscoreResult)

// _.reduce

// Start: "Read the F'in Documentation"
// Goal : 'R.T.F.D.'

// var myString = "Read the F'in Documentation"

// var reduceResult = _.reduce(
// 	myString.split(' '), //split returns an array

// 	function(acronymSoFar, word){ //acronymSoFar is your memo's running total, and word is for each word
// 		// console.log(word, acronymSoFar)

// 		return acronymSoFar += word[0].toUpperCase() + '.'
// 	},

// 	'' //this is where the [memo] starts ...if it were a number just type like 0 in there instead of quotes

// 	)

// console.log(reduceResult)


// console.log()


//------find-----\\

_.find

//take an array of objects and finds all the objects that meet a certain criteria 

var tubers = [
	{
		name	: 'Sweet Potato',
		color	: 'Orange'
	},
	{
		name	: 'Peruvian Blue Potatoes',
		color	: 'Purple'
	},
	{
		name	: 'Purple Fingerling Potatoes',
		color	: 'Purple'
	}

]
// var foundTuber = _.find(tubers, function(currentTuber) {
		
// 		return currentTuber.color.toLowerCase() === 'purple'
// 	})

// console.log(foundTuber)
//GOAL - find the tubers that are purple




//==========================PLUCK========================\\


// console.log(_.pluck(tubers, 'color'))

//-----Uniq-----\\
//will take an array of things and return a new array that only contains a list of the unique values//

// console.log(_.uniq( _.pluck(tubers, 'color') ) )





//underscore has a method called chain (it chains two methods together)

// var chainResult = _.chain(tubers)
// 	//order does matter
// 	.pluck('color')
// 	.uniq()
// 	.value()
// 	//_.chain() and .value are like the bread to a sandwich...
// 	console.log(chainResult)


var tubers = [
	{
		name	: 'Sweet Potato',
		colors	: ['Orange', 'Navajowhite', 'Purple', 'Burlywood']
	},
	{
		name	: 'Peruvian Blue Potatoes',
		colors	: ['Purple', 'Burlywood', 'Red', 'Peruvian Blue']
	},
	{
		name	: 'Purple Fingerling Potatoes',
		colors	: ['Purple', 'Black', 'Hammock', 'Goldenrod']
	}

]
//Goal- create an array of all the unique colors

var foundTuber = _.chain(tubers)
	.pluck('colors')
 	.flatten() //Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.
 	.uniq()
 	.value()
 

console.log(foundTuber)







