export default function getNumber(str) {
    let number = '';
    if (str) {
        for (let i = 0; i < str.length; i++) {
            if (str[i]) {
                number += str[i].charCodeAt();
            }
        }
    }

    return number;
}