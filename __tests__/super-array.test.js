import instrutores from './instrutores.json'
import { SuperArray } from '../src/super-array'


let INSTRUTORES

beforeEach(() => {  //instancia instrutores sempre antes
  INSTRUTORES = SuperArray(instrutores)
})


describe('Exemplo de testes', () => {
  it('Valor importado deve ser true', () => {
    expect(true).toBeTruthy()
  })
})


describe('suite de push', () => {         
  
  it('push deve adicionar um novo instrutor ao meu super array', () => {
    
    const instrutor_esperado = SuperArray([{"nome": "Cassiano Luis Flores Michel", "dandoAula": false}])
    const instrutor_obtido = SuperArray()
    instrutor_obtido.push({"nome": "Cassiano Luis Flores Michel", "dandoAula": false})

    expect(instrutor_obtido.itens).toStrictEqual(instrutor_esperado.itens)
  })

  it('push nao deve adicionar instrutor caso vazio', () => {

    const instrutor_esperado = SuperArray()
    const instrutor_obtido = SuperArray()
    instrutor_obtido.push()

    expect(instrutor_obtido.itens).toStrictEqual(instrutor_esperado.itens)    

  })
})


describe('suite de forEach', () => {     
  
  it('forEach deve passar por todos os instrutores e chamando o callback esperado', () => {

    INSTRUTORES.forEach(item => {  //o item eh o "array.itens[i]"
      console.log(item)
    })
  })

  it('forEach deve adicionar 2 a cada elemento', () => {

    const array_inicial = SuperArray([1, 2, 3])
    const array_esperado = SuperArray([3, 4, 5])
    const array_calculado = SuperArray()
    
    array_inicial.forEach(item => {
      array_calculado.push(item+2)  //em cada item do array inicial, adiciona em um novo array somado de 2
    })

    expect(array_calculado.itens).toStrictEqual(array_esperado.itens)
  })
})


describe('suite de map', () => {     
  
  it('map deve retornar um novo array com o numero de nomes que o instrutor tem', () => {
    
    const array_esperado = SuperArray([15,14,14,30,15,13,16,19])

    const array_calculado = INSTRUTORES.map(item => {
      return item.nome.length    //retorna o length de cada nome e mapeia em um novo array
    })

    expect(array_calculado.itens).toStrictEqual(array_esperado.itens)
  })
})

describe('suite de filter', () => {      
  
  it('filter deve retornar um novo array apenas com os instrutores que estão dando aula', () => {

    const array_esperado = SuperArray([{ "nome": "Gustavo Büttenbender Rodrigues", "dandoAula": true },
                                       { "nome": "William Cardozo", "dandoAula": true }])

    const array_calculado = INSTRUTORES.filter(item => {
      return item.dandoAula  //em cada item, retorna o booleano de "dandoAula"
    })

    expect(array_calculado.itens).toStrictEqual(array_esperado.itens)
  })
})

describe('suite de find', () => {      
  
  it('find deve retornar o primeiro instrutor que está dando aula', () => {
    const instrutor_esperado = { "nome": "Gustavo Büttenbender Rodrigues", "dandoAula": true }

    const instrutor_calculado = INSTRUTORES.find(item => {
      return item.dandoAula
    })

    expect(instrutor_calculado).toStrictEqual(instrutor_esperado)
  })

  it('find deve retornar undefined caso não encontre', () => {
    const instrutor_esperado = INSTRUTORES.itens[8]  //undefined

    INSTRUTORES.forEach(item => {  //ninguem dando aula
      item.dandoAula = false
    })

    const instrutor_calculado = INSTRUTORES.find(item => {
      return item.dandoAula
    })

    expect(instrutor_calculado).toStrictEqual(instrutor_esperado)
  })

})

describe('suite de reduce', () => {      
  
  it('reduce deve retornar o total de letras no nome dos instrutores', () => {
    const valor_esperado = 136

    let valor_calculado = INSTRUTORES.reduce((acumulador,item) => {
      return acumulador += item.nome.length
    }, 0)    //começa em 0, cada iteração soma o length de cada item

    expect(valor_calculado).toBe(valor_esperado)
  })

  it('reduce deve retornar um boolean se todos os instrutores estão dando aula', () => {

    INSTRUTORES = [   //todos instrutores dando aula
      { "nome": "Fabio Junqueira", "dandoAula": true },
      { "nome": "Pablo Oliveira", "dandoAula": true },
      { "nome": "Sergio Andrade", "dandoAula": true },
      { "nome": "Gustavo Büttenbender Rodrigues", "dandoAula": true },
      { "nome": "William Cardozo", "dandoAula": true },
      { "nome": "Diandra Rocha", "dandoAula": true },
      { "nome": "Rafael Zorzanelo", "dandoAula": true },
      { "nome": "Victor Herzog Damke", "dandoAula": true }
    ]

    //const valor_esperado = INSTRUTORES.length

    let valor_calculado = INSTRUTORES.reduce((acumulador,item) => {
      return acumulador += item.dandoAula
    }, 0)                   //começa uma contagem em 0
                            //1 significa true, a cada true aumenta 1
                            //se valor_calculado for = 8 (INSTRUTORES.length), todos eram true

    expect(valor_calculado).toBeTruthy()   //qualquer coisa diferente de 0, é = true                      
    //expect(valor_calculado).toBe(valor_esperado)
  })

})
