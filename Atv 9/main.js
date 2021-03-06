const R = require('ramda');

const isEven = R.curry((number) => {
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
});

const positive = R.curry((number) => {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
});

const isOdd = R.curry((number) => {
    const n = R.clone(number);
    n.odd = n.value % 2 != 0;
    return n;
});

const negative = R.curry((number) => {
    const n = R.clone(number);
    n.negative = n.value < 0;
    return n;
});

const isZero = R.curry((number) => {
    const n = R.clone(number);
    n.zero = n.value == 0;
    return n;
});

const isPrime = R.curry((number) => {
    const n = R.clone(number);
    if (n.value != 1) {
        for (var i = 2; i < n.value; i++)
            if (n.value % i == 0){
                n.prime = false;
                return n;
            }
        if(n.value !== 1){
            n.prime = true;
            return n;
        }
        n.prime = true;
        return n;
    }
});

function mapToNumberObject(num) {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

// ExercÃ­cio 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()
const arrToObj = arr.map((number) => mapToNumberObject(number));

// ExercÃ­cio 2: seguindo o modelo das 2 primeiras funÃ§Ãµes implemente as outras 4 funÃ§Ãµes

// ExercÃ­cio 3: refatore todas as funÃ§Ãµes para a forma usando arrow function (=>)

// ExercÃ­cio 4: use R.pipe para compor as funÃ§Ãµes: isEven, positive, isOdd, negative, 
    // isZero, e isPrime. Teste a funÃ§Ã£o composta com um Ãºnico objeto.
    const onlyObj = arrObj.map(
        R.pipe(
            isEven(),
            positive(),
            isOdd(),
            negative(),
            isZero(),
            isPrime()
        )
    )
    console.log(onlyObj[0]);

// ExercÃ­cio 5: use a funÃ§Ã£o composta do Ex. 4 para transformar os nÃºmeros em 'arr'
const numberinArr = arrObj.map(
    R.pipe(
        isEven(),
        positive(),
        isOdd(),
        negative(),
        isZero(),
        isPrime()
    )
)
console.log(numberinArr); 