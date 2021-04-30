//1. Замена всех отрицательных чисел

const arr = [2, -2, 0.1, 0, 0, -10, -9.9, -0.5, 0.3, 0.003, 2].map(item => {
    if(item < 0) {
        return 0
    }
    return item
})
console.log(arr)


//2. Избавляемся от близнецов

const elements = [
    { a: 2, b: 12 },
    { a: 0.1, b: 0.1 },
    { a: 0, b: 1 },
    { a: 100, b: 1000 },
    { a: 4, b: 4 }
    ]

const arr2 = elements.filter(item => {
    return item.a !== item.b;

})
console.log(arr2)


//3.  Поиск близнеца
function arr4(el) {
     el = elements.find(item => {
        if (item.a === item.b) {
            return item
        }
    })
    const aa = el.a + el.b
    console.log(aa)
}

arr4(elements)