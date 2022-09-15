

export const CM = (dadosOrdenados: Array<number>, h: any) => {
    let H = Number(h)
    H.toFixed(1)
    let calcH = H + dadosOrdenados[0];
    let hastag = []
    for (let i in dadosOrdenados) {
        if (dadosOrdenados[i] <= calcH) {
            hastag.push(dadosOrdenados[i])
            continue;
        }
    }
    console.log(` de ${dadosOrdenados[0]} até ${calcH} foram ${hastag.length} classes ${hastag} ${hastag.at(-1)}`);

}