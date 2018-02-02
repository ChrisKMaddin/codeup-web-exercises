
function parser(string) {
    var phoneArray = [];
    if (typeof(parseInt(string)) === 'number' && isFinite(string)) {
        string = string.toString();
        if (string.length === 7) {
            phoneArray = string.split("");
            phoneArray.splice(3, 0, "-");
            phoneArray = phoneArray.join("");
        } else if (string.length === 10) {
            phoneArray = string.split("");
            phoneArray.splice(3, 0, "-");
            phoneArray.splice(7, 0, "-");
            phoneArray = phoneArray.join("");
        } else if (string.length === 11) {
            phoneArray = string.split("");
            phoneArray.splice(1, 0, "-");
            phoneArray.splice(5, 0, "-");
            phoneArray.splice(9, 0, "-");
            phoneArray = phoneArray.join("");
        } else {
            return false;
        }
        return phoneArray;
    }
}

