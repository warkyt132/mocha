//const page='JSON1'
const funtrue = require(`./trueFilter`)
const funfalse = require(`./falseFilter`)
const assert = require("assert");

describe('сравнение', () => {
    it('should pass', () => {
        assert.deepEqual((
            funtrue(parsingMessage,mask)),
            rez)
       });
       it('should pass', () => {
        assert.deepEqual((
            funfalse(parsingMessage1,mask1)),
            rez1)
       });
       it('should pass', () => {
        assert.deepEqual((
            funfalse(message,maskm)),
            rezm)
       });
   });

///////funtrue

   const parsingMessage = {
    a: 1234,
    b: {
        a: 4321,
        b: 4234422,
        c: 435,
        e: "sdfjk"
    },
    c: "21345",
    d: {
        a: 123,
        b: 2345
    }
}

const mask = {
    a: true,
    b: {
        a: true
    },
    d: {
        b: true
    }
}
const rez = {
    a: 1234,
    b: {
        a: 4321
    },
    d: {
        b: 2345
    }
}
///////funfalse
const parsingMessage1 = {
    a: 1234,
    b: {
        a: 4321,
        b: 4234422,
        c: 435,
        e: "sdfjk"
    },
    c: "21345",
    d: {
        a: 123,
        b: 2345
    }
}
const mask1 = {
    a: false,
    b: {
        a: false
    },
    d: {
        b: false
    }
}
const rez1 = {
     b: { 
        b: 4234422,
         c: 435, 
         e: 'sdfjk' 
        }, 
        c: '21345',
         d: 
         { 
            a: 123 
         } 
    }
//////funfalse
    const   message = {
        a: 123,
        b: [
            {
                a: 1,
                b: 2
            },
            {
                a: 3,
                b: 4
            }
        ]
    }

    const  maskm = {
        b: [{
            b: false
        }]
    }
    const  rezm={
        a: 123,
        b: [
            {
                a: 1
            },
            {
                a: 3
            }
        ]
    } 
/////