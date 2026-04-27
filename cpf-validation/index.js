/*
1x  2x  3x  4x  5x  6x  7x  8x  9x
10  9   8   7   6   5   4   3   2
10  18  24  28  30  30  28  24  18 = 210

11 - (196 % 11) = 2

1x  2x  3x  4x  5x  6x  7x  8x  9x  0x
11  10  9   8   7   6   5   4   3   2
11  20  27  32  35  36  35  32  27  0 = 255

11 - (234 % 11) = 8

541.381.048-28
*/
function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    const cpfValidado = cpfParcial + digito1 + digito2
    return cpfValidado === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function (cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    const soma = cpfArray.reduce((ac, n) => {
        ac += (regressivo * Number(n))
        regressivo--
        return ac
    }, 0)

    let digito = 11 - (soma % 11)    
    return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequencia = function (){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('123.456.789-09')

if(cpf.valida()){
    console.log('CPF Válido!')
}else{
    console.log('CPF Inválido!')
}