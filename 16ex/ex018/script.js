let c = 0
let mem = []
function addnum() {
    let num = document.querySelector('input#txtn')
    if (isNaN(Number(num.value)) || mem.includes(Number(num.value)) || num.value > 100 || num.value < 1 || num.value.length == 0) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {        
        let res = document.getElementById('res')
        res.innerHTML = ''
        mem.push(Number(num.value))
        c++
        let log = document.querySelector('select#selLog')
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        item.value = `log${c}`
        log.appendChild(item)
    }
    num.value = ''
    num.focus()
}
function analyze() {
    if (mem.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let res = document.getElementById('res')
        let total = mem.length
        let maior = Math.max(...mem)
        /* Exemplo Maior
        let maior = Math.max.apply(null, mem)
        let maior = mem.reduce(function(a, b) {
            return Math.max(a, b)
        })
        */
        let menor = Math.min(...mem)
        /* Exemplo Maior-Menor-Soma
        let maior = mem[0]
        let menor = mem[1]
        let soma = 0
        for(let pos in mem) {
            soma += mem[pos]
            if(mem[pos] > maior) {
                maior = mem[pos]
            }
            if(mem[pos] < menor) {
                menor = mem[pos]
            }
        }
        */

        let soma = mem.reduce(function(a, b) {
            return a + b
        })
        let media = soma / total
        
        res.innerHTML = `<p>Ao todo, temos ${total} número cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}