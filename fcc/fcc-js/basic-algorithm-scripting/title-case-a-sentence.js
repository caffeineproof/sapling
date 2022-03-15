function titleCase(str) {
    return str.replace(
        /\w\S*/g,
        //take a substring and any amout of space after it and
        //replace it with title case, do this multiple times(g)
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

console.log(titleCase("I'm a little tea pot"));