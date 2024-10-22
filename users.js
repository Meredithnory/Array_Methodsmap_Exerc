//Your task is to iterate over this array using the map method 
//and return a new array with new properties fullName and membershipStatus, 
//where fullName is a combination of firstName and lastName, and 
//membershipStatus is Premium if the user's points are more than 100, 
//and Standard otherwise. Print the new array.
const users = [
	{ firstName: "Alice", lastName: "Johnson", points: 120 },
	{ firstName: "Bob", lastName: "Smith", points: 99 },
	{ firstName: "Charlie", lastName: "Brown", points: 180 }
];

const membershipStatus = users.map((user) => {
	const fullName = `${user.firstName} ${user.lastName}`;
	const membershipStatus = user.points < 100 ? 'Standard' : 'Premium';
	return { fullName, membershipStatus };
});

console.log(membershipStatus);