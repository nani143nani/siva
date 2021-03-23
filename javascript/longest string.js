/*var r=["array","new","longest","short"]
var  char=[""]
let charr=r.forEach(function(value){
    if (value.length>char.length){
        char=value
    }
    console.log (char)
})
console.log(charr)*/
var arr=["arrayvart","new","longest","short"]
function longestString1(arr) {
	var longest = ''; // Step 0
	for (var i = 0; i < arr.length; i++) { // Step 1
		if (arr[i].length > longest.length) { // Step 2 & 3
			longest = arr[i]; // Step 4
		}
	}
	return longest; // Step 5
}
console.log(longestString1(arr))