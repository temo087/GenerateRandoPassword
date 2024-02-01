type PasswordGen = {
    length:number,
    includeUpperCase:boolean,
    includeLowerCase:boolean,
    includeNumbers:boolean,
    includeSymbols:boolean,
}
const LowerCases = 'abcdefghijklmnopqrstuvwxyz';
const UpperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = `!@#$%^&*()-_=+{}|;:'",.<>?/`


function GenerateRandomPassword({ length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols }: PasswordGen) {
    let pass = '';
    if (includeUpperCase) pass += UpperCases;
    if (includeLowerCase) pass += LowerCases;
    if (includeNumbers) pass+= NUMBERS;
    if (includeSymbols) pass += SYMBOLS;

    let password = '';

    for (let i = 0; i < length; i++) {
        password += pass.charAt(Math.floor(Math.random() * pass.length));
    }

    return password;
}


export {GenerateRandomPassword,LowerCases,UpperCases,NUMBERS,SYMBOLS}
