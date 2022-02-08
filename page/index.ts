import {RotorAssembly} from "./enigma/rotor_assembly";
import * as standardRotors from "./enigma/standard_rotors";
import {Reflector} from "./enigma/reflector";

const myRotorAssembly = new RotorAssembly([standardRotors.militaryRotors[1], standardRotors.militaryRotors[2]], new Reflector("EJMZALYXVBWFCRQUONTSPIKHGD"));
const inputString = "Poggers";
const initialPositions = [9, 15];
myRotorAssembly.setRotorPositions(initialPositions);
const cypherText = myRotorAssembly.encipherText(inputString);
console.log(inputString + " => " + cypherText);
myRotorAssembly.setRotorPositions(initialPositions);
const outputString = myRotorAssembly.encipherText(cypherText);
console.log(cypherText + " => " + outputString);