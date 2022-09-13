import { qntDados } from "./functions/qntDados";
import { At } from './functions/at'
import { K } from "./functions/K";
import { H } from "./functions/H";
import { CM } from "./functions/cm/CM";


const dados = [
    150, 150, 150, 151, 152, 153, 156, 156, 156, 158,
    158, 158, 160, 160, 160, 161, 161, 161, 162, 162, 162, 163, 163, 163, 163, 166, 166, 167, 167, 167, 167, 167, 168, 168, 168, 168, 168, 168, 169, 170, 170, 170, 170, 170, 170, 171, 172, 172, 172, 172, 173, 173, 173, 174, 174, 174, 174, 175, 175, 175, 176, 176, 176, 178, 179, 179, 179, 181, 182, 182
]
const dadosOrdenados = dados.sort()
const k = K(dadosOrdenados)
const at = At(dadosOrdenados)
const h = H(at, k)
const cm = CM(dadosOrdenados)

console.table(qntDados(dadosOrdenados));
console.log(`at = ${at}`);
console.log(`total de linhas = ${k}`);
console.log(`h = ${h}`);
//console.log(cm);

// pmi
// fi
// fri%
// fa

