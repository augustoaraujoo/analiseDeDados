import { qntDados } from "./functions/qntDados";
import { At } from './functions/at'
import { N } from "./functions/N";


const dados = [672.2, 669.2, 669.8, 672.2, 662.7, 661.3, 672.2, 662.4, 663.9, 672.6, 661.3, 667.2, 669.2, 667.2, 665.1, 668.4, 672.2, 662.7, 861.3, 668.4, 666.5, 672.6, 670.5, 669.2, 662.4, 671.3, 869.2, 672.2, 665.1, 671.3, 672.2, 667.2, 672.2, 674.2, 672.6, 667.2, 673.6, 661.3, 672.6, 670.5, 673.6, 662.7, 670.5, 674.2, 672.2, 670.5, 661.3, 673.1, 672.2, 671.3, 665.1, 674.2, 672.6, 673.6, 669.8, 673.6, 667.2, 673.1, 672.2, 673.1, 668.4, 672.2, 867.2, 666.5, 672.2, 673.1, 663.9, 669.8, 671.3, 661.3, 670.5, 672.6
]
const dadosOrdenados = dados.sort()
const n = N(dadosOrdenados)
const at = At(dadosOrdenados)

console.table(qntDados(dadosOrdenados));
console.log(at);
console.log(`total de linhas ${n}`);


/*
0,01 À 0,49 => APROXIMAÇÃO PARA MENOS

0,50 À 0,99 => APROXIMAÇÃO PARA MAIS
*/
// qnt linhas= k
// at = min-max
// h = At/k = 42/9 ≅ 4,67 ≅ 5

// pmi
// fi
// fri%
// fa

