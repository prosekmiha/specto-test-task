export default function isPasswordValid(password) {
    let specials = "/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/";
    let uc = false;
    let lc = false;
    let nmb = false;
    let spe = false;
    for (let i = 0; i < password.length; i++) {
        if(password[i] === password[i].toUpperCase() && isNaN(password[i])) {uc = true;}
        if(password[i] === password[i].toLowerCase() && isNaN(password[i])) {lc = true;}
        if(!isNaN(password[i])) {nmb = true;}
        if(specials.includes(password[i])) {spe = true;}
    }

    let result = uc && lc && nmb && spe;
    return (result);
};
