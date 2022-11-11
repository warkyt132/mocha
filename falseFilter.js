function prinArr(message,mask){
    falseFilter(message,mask);
   async function falseFilter(message, mask) {
    try{
    if (typeof (mask) != "object") return message;

    for (let key in mask) {
        if (typeof (mask[key]) == "object") {
            if (Array.isArray(mask[key])) {
                if (Array.isArray(message[key])) {
                    for (elem of message[key]) {
                        falseFilter(elem, mask[key][0]);
                    }
                }
            }
            else {
                falseFilter(message[key], mask[key]);
            }
        }
        else if (mask[key] == false) {
            delete message[key]
        }
    }
    return message;
}catch(e){
    throw new Error(`trueFilter: error:\n${JSON.stringify({"error":e,"stack":e.stack})}\n"message":${JSON.stringify(message)}\n"mask:${JSON.stringify(mask)}`)
}
}
return message
}
module.exports  = prinArr

