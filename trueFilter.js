function prinArr(message,mask){
    

    trueFilter(message,mask);

    
        async function trueFilter(message, mask)  {
            try{
            if (typeof (mask) != "object") return message;
        
            for (let key in message) {
                if (typeof (mask[key]) == "object") {
                    if (Array.isArray(mask[key])) {
                        if (Array.isArray(message[key])) {
                            for (elem of message[key]) {
                                trueFilter(elem, mask[key][0]);
                            }
                        }
                    }
                    else {
                        trueFilter(message[key], mask[key]);
                    }
                }
                else if (mask[key] != true) {
                    delete message[key]
                }
            }
            return message;
        }catch(e){
            throw new Error(`trueFilter: error:\n${JSON.stringify({"error":e,"stack":e.stack})}\n"message":${JSON.stringify(message)}\n"mask:${JSON.stringify(mask)}`)
        }
        }
   
     return message ;

}
module.exports  = prinArr


