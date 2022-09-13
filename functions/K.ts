export const K = (dadosOrdenados: Array<number>) => {
    /*
    0,01 À 0,49 => APROXIMAÇÃO PARA MENOS
    0,50 À 0,99 => APROXIMAÇÃO PARA MAIS
    */
    const N = dadosOrdenados.length
    const raizDeN = Math.sqrt(N)
    const raizDeNArredondada = Math.round(raizDeN)
    return raizDeNArredondada
}