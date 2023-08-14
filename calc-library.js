
function operation(x, y, z) {
    if (z === '+') {
        return `Result :  ${x + y}`;
    }else if(z === '-') {
        return `Result :  ${x - y}`;
    }else if(z === '*') {
        return `Result :  ${x * y}`;
    }else{
        return `Result :  ${x / y}`;
    }
}

document.body.append(operation(2, 6, '+'));      //result = 8