function capitalize(str) {
    str = str.trim().toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    return str;


}
// console.log("danish".toLocaleUpperCase() )
const namee = "danish raza";

console.log(capitalize(namee)); // Output: Danish Raza