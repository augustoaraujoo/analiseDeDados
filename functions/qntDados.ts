export const qntDados=(dadosOrdenados:Array<number>)=> {
    const qnt = dadosOrdenados.reduce((acc:any, curr:any) => {
        acc[curr] = acc[curr] + 1 || 1;
        return acc;
    }, {})
    return qnt
}
