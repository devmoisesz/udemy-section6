/*
Object.assign()
Object.getOwnPropertyDescriptor(obj, 'name')
Object.defineProperties()
*/
const product = { name: 'Garrafa', price: 89}
const newProduct = Object.assign({id: 1}, product, {mark: 'Stanley'})
Object.defineProperties(newProduct, {
    id:{
        value: newProduct.id,
        writable: false,
        configurable: false,
        enumerable: false,
    },
    name:{
        value: newProduct.name,
        writable: true,
        configurable: false,
        enumerable: true
    },
    price:{
        value: newProduct.price,
        writable: true,
        configurable: false,
        enumerable: true,
    },
    mark:{
        value: newProduct.mark,
        writable: true,
        configurable: false,
        enumerable: true
    }
})

console.log(newProduct)
console.log(Object.getOwnPropertyDescriptor(newProduct, 'name'))