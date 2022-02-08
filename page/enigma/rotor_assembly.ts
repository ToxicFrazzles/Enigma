import {Rotor} from './rotor';
import { Reflector } from './reflector';

export class RotorAssembly{
    rotors: Rotor[];
    reflector: Reflector;
    constructor(rotors: Rotor[], reflector: Reflector){
        this.rotors = rotors;
        this.reflector = reflector;
    }

    _inputCharacter(character: string): string{5
        if(character.length !== 1) throw "Cannot pass multiple letters through a rotor";
        for(var i=0; i<this.rotors.length; ++i){
            character = this.rotors[i].forwardPass(character);
        }
        character = this.reflector.reflect(character);
        for(var i=this.rotors.length-1; i>=0; --i){
            character = this.rotors[i].backwardPass(character);
        }
        return character;
    }

    _stepWheels(){
        let rotateNext = true;
        for(let i=0; i<this.rotors.length && rotateNext; ++i){
            rotateNext = this.rotors[i].stepForward();
        }
    }

    encipherCharacter(character: string): string {
        if(typeof(character) !== "string" || character.length === 1) throw "The encipherCharacter method only takes single characters";
        let result = this._inputCharacter(character);
        this._stepWheels();
        return result;
    }

    encipherText(text: string): string {
        let result = "";
        for(let i=0; i<text.length; ++i){
            result += this._inputCharacter(text[i]);
            this._stepWheels();
        }
        return result;
    }

    getRotorPositions(): number[] {
        let result = [];
        for(let i=0; i<this.rotors.length; ++i){
            result.push(this.rotors[i].position);
        }
        return result;
    }

    setRotorPositions(positions: number[]){
        for(let i=0; i<positions.length; ++i){
            this.rotors[i].position = positions[i];
        }
    }
}