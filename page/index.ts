import {EnigmaMachine} from "./enigma/enigma";
import * as standardRotors from "./enigma/standard_rotors";
import {Reflector} from "./enigma/reflector";


const myRotors = [standardRotors.militaryRotors[1], standardRotors.militaryRotors[2], standardRotors.militaryRotors[3]];
const myReflector = new Reflector("EJMZALYXVBWFCRQUONTSPIKHGD");

const enigmaMachine = new EnigmaMachine(myRotors, myReflector);

const container = document.getElementById("enigma_machine_container")
if(container === null) throw "There is no enigma machine container";
container.appendChild(enigmaMachine.getElement());

const inputString = "how much wood would a wood chuck chuck if a wood chuck could chuck wood";
const initialPositions = [0, 0, 0];
enigmaMachine.rotorAssembly.setRotorPositions(initialPositions);
const cypherText = enigmaMachine.rotorAssembly.encipherText(inputString);
console.log(inputString + " => " + cypherText);
enigmaMachine.rotorAssembly.setRotorPositions(initialPositions);
const outputString = enigmaMachine.rotorAssembly.encipherText(cypherText);
console.log(cypherText + " => " + outputString);