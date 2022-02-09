import { RotorAssembly } from "./rotor_assembly";
import { Reflector } from "./reflector";
import { Rotor } from "./rotor";


export class EnigmaMachine{
    _machineElem?: HTMLElement;
    rotorAssembly: RotorAssembly;

    constructor(rotors: Rotor[], reflector: Reflector){
        this.rotorAssembly = new RotorAssembly(rotors, reflector);
    }

    getElement(): HTMLElement {
        if(this._machineElem !== undefined) return this._machineElem;
        this._machineElem = document.createElement("div");
        this._machineElem.classList.add("enigma_machine")
        this._machineElem.appendChild(this.rotorAssembly.getElement());
        return this._machineElem;
    }
}