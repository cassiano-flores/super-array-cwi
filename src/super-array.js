export const SuperArray = (itens = []) => {

  const array = {
    /**
     * Propriedade para acessar os itens
     */
    index: itens.length,
    itens: [...itens],
  }

  /**
   * Adicionar um novo item ao final dos items
   */

  array.push = item => {

    if (item == undefined) {
      return

    } else {
      array.itens[array.index] = item
      array.index++
    }
  }

  /**
   * Itera sobre cada um dos elementos do SuperArray enviando o item e o index
   * como segundo parametro
   */

  array.forEach = callback => {

    for (let i = 0; i < array.index; i++) {
      callback(array.itens[i])
    }
  }

  /**
   * Retorna um novo SuperArray com os itens mapeados
   */

  array.map = callback => {

    const novoArray = SuperArray()

    for (let i = 0; i < array.index; i++) {
      novoArray.itens[i] = callback(array.itens[i])  //"mapeia", adiciona tudo em um novo array
    }                                                //poderia ser feito com push

    return novoArray
  }


  /**
   * Retorna um SuperArray novo com os itens filtrados
   */

  array.filter = callback => {

    const novoArray = SuperArray()

    for (let i = 0; i < array.index; i++) {
      if (callback(array.itens[i])) {
        novoArray.push(array.itens[i])  //apenas adiciona em um novo array o que retornar true 
      }
    }

    return novoArray
  }


  /**
   * Retorna o primeiro elemento do SuperArray que satisfazer o callback recebido
   * se não encontrar, deve retornar undefined
   */

  array.find = callback => {

    for (let i = 0; i < array.index; i++) {
      if (callback(array.itens[i])) {
        return array.itens[i]    //ao inves de adicionar cada elemento em um novo array (filter), retorna direto
      }
    }

    return undefined
  }

  /**
   * Reduz o SuperArray em um único valor
   */


  array.reduce = (callback, valorInicial) => {

    let valorFinal = null

    for (let i = 0; i < array.index; i++) {
      valorFinal += callback(valorInicial, array.itens[i])
    }

    return valorFinal
  }

  return array
}
