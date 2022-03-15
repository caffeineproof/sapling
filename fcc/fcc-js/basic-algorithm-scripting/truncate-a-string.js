function truncateString(str, num) {
    let truncatedStr = [];
    let i = 0;
    if (str.length > num) {
        for (i = 0; i < num; i++) {
            truncatedStr[i] = str[i];
        }
        truncatedStr[i] = "...";
        return truncatedStr.join("");
    }
    else {
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));