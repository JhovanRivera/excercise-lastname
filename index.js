/**
 * Get the array elements after the given position, 
 * then transform the first letter of the array element 
 * to uppercase and finally unify the whole array by spaces
 * @param {Array} arrayLastName fullname array
 * @param {Number} position position of last name
 * @returns string with last name capitalized
 */
function setLastName(arrayLastName, position) {
    return arrayLastName.slice(position)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

/**
 * Identify the size of the first name and return its last name
 * @param {String} name user fullname
 * @returns last name
 */
function getLastName(name) {
    const arrayLastName = name.split(" ");
    if (arrayLastName.length > 3) {
        return setLastName(arrayLastName,-2);
    } else if (arrayLastName.length === 2) {
        return setLastName(arrayLastName, -1);
    } else {
        return "Su apellido no es valido";
    }
}

console.log(getLastName("Diana Marcela de Rivera solano ostos"))