
export const At = (dadosOrdenados: Array<number>) => {
    const max = Math.max(...dadosOrdenados)
    const min = Math.min(...dadosOrdenados)
    return (max - min).toFixed(1)
}