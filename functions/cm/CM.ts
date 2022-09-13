export const CM = (dadosOrdenados: Array<number>) => {
    // por h=4
    const qnt = dadosOrdenados.reduce((acc: any, curr: any) => {
        acc[curr] = acc[curr] + 1 || 1;
        return acc;
    }, {})

     for (let i in dadosOrdenados) {
        
         if (`${dadosOrdenados[i]}` >= `${dadosOrdenados[i]}`) {
            
            
             const ordem = dadosOrdenados[i]
             console.log(`${ordem} ${ordem.toString().length}`,);
             continue;
         }
     }

    }