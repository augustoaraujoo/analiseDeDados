

export const CM = (dadosOrdenados: Array<number>, h: any) => {
    let H = Number(h)
    H.toFixed(1)
    let calcH = H + dadosOrdenados[0];
    let array: Array<number> = []
    let outrosArray: Array<number> = []


    dadosOrdenados.forEach((element: any, index: number) => {
        outrosArray.push(element)
        if (element <= calcH) {
            const existsNums = array.push(element);
            // outrosArray remover os items do array
            outrosArray.splice(0, existsNums)
            // ja removi os items do array principal 
            const last = array.at(-1);
            const newH = Number(last) + Number(H)
        }
    })

    console.log(array);
    console.log(outrosArray);

}