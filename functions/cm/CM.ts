

export const CM = (dadosOrdenados: Array<number>, h: any) => {
    let increment = '';

    let H = Number(h)
    H.toFixed(1)

    let calcH = H + dadosOrdenados[0];

    console.log(`H = ${H} : ${calcH}`);

    for (let i in dadosOrdenados) {
        if (dadosOrdenados[i] <= calcH) {
            increment += '#'
            console.log("CM: " + dadosOrdenados[i]);
            continue;
        }
    }
    console.log(` de ${dadosOrdenados[0]} até ${calcH} foram ${increment.length}`);

}