//confirm the ending of a string with built in functions
//source: https://www.freecodecamp.org/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/
//the substr() method: returns the characters in a string from a specified
//index,through specified number of character.

function confirmEnding(string, target) {
    // Step 1. Use the substr method
    if (string.substr(-target.length) === target) {

        // What does "if (string.substr(-target.length) === target)" represents?
        // The string is 'Bastian' and the target is 'n' 
        // target.length = 1 so -target.length = -1
        // if ('Bastian'.substr(-1) === 'n')
        // if ('n' === 'n')
        console.log(target.length);
        console.log(string.substr(-target.length) + " ; " + target);
        //NOTE: the negative sign(-) in "string.substr(-target.length)",
        //ideicates starting tagret.length position from reverse(i think?)

        //can use ternary operator like follows:
        //(string.substr(-target.length) === target) ? true : false;

        // Step 2. Return a boolean (true or false)
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('the child\'s sea', 'sea'));
