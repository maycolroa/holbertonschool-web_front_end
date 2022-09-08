function welcome(firstName, lastName) {
    return firstName + ' ' + lastName
}
function displayFullName(firstName, lastname) {
    const completeName = welcome(firstName, lastname);
    console.log("welcome " + completeName  + ".");  
}
