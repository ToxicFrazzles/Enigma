export class Rotor {
    characterMap: string;
    charCount: number;
    turnoverPosition: number | number[];
    position: number = 0;
    _wheelElem?: HTMLElement;

    constructor(characterMap: string, turnoverPosition: number | number[]) {
        if(characterMap.length === 0) throw "Character map is too short";
        this.characterMap = characterMap;
        this.charCount = this.characterMap.length;
        this.turnoverPosition = turnoverPosition;
    }

    forwardPass(character: string): string{
        if(typeof character !== "string") throw "That's not the right type";
        if(character.length !== 1) throw "Cannot pass multiple letters through a rotor";
        const codePoint = character.toUpperCase().codePointAt(0);
        if(codePoint === undefined) throw "Invalid character";
        const idx = (codePoint - 65 + this.position) % this.charCount;
        return this.characterMap[idx];
    }

    backwardPass(character: string): string{
        if(typeof character !== "string") throw "That's not the right type";
        if(character.length !== 1) throw "Cannot pass multiple letters through a rotor";
        const idx = (this.characterMap.indexOf(character.toUpperCase()) + this.charCount - this.position)% this.charCount;
        const codePoint = idx + 65;
        const char = String.fromCodePoint(codePoint);
        return char;
    }

    stepForward(){
        this.position += 1;
        this.position = this.position % this.charCount;
        if(typeof(this.turnoverPosition) == "number")
            return this.position == this.turnoverPosition-1;
        for(let i=0; i<this.turnoverPosition.length; ++i){
            if(this.position == this.turnoverPosition[i] -1) return true;
        }
        return false;
    }

    getElement(): HTMLElement{
        if(this._wheelElem !== undefined) return this._wheelElem;
        this._wheelElem = document.createElement("div");
        this._wheelElem.classList.add("wheel");
        return this._wheelElem;
    }
}