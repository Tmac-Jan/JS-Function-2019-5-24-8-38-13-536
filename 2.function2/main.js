function palindrome(message){
    var str = message.split("").reverse().join("");
    if (message.indexOf(str)==0&&str.indexOf(message)==0){
        return true;
    } else {
        return false;
    }
}