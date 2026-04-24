// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: false, 
        configurable: true, 
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('ERRO!, O ESTOQUE TEM QUE SER NUMBER')
            }

            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Blusa', 119, 7)
p1.estoque = 12
console.log(p1)
console.log(p1.estoque)
