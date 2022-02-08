function hasRepeatedLetters(inputString: string): boolean {
    var text = inputString.split("");
    return text.some(function(v, i, a){
        return a.lastIndexOf(v) != i;
    });
}

function isCharMapSelfReciprocal(characterMap: string){
    for(let i=0; i<characterMap.length; ++i){
        let codePoint = characterMap.codePointAt(i);
        if(codePoint === undefined) throw "Invalid character";
        let mapChar = characterMap[codePoint-65];
        let mapCodePoint = mapChar.codePointAt(0);
        if(mapCodePoint === undefined) throw "Invalid character";
        if(i != mapCodePoint-65) return false;
    }
    return true;
}

export class Reflector{
    characterMap: string;
    position: number = 0;

    constructor(characterMap: string) {
        if(hasRepeatedLetters(characterMap)) throw "Cannot have letters repeated in the character map";
        this.characterMap = characterMap.toUpperCase();
        if(!isCharMapSelfReciprocal(this.characterMap)) throw "Character map must be self-reciprocal."
    }

    reflect(character: string): string{
        if(character.length !== 1) throw "Cannot pass multiple letters through a rotor";
        const codePoint = character.codePointAt(0);
        if(codePoint === undefined) throw "Invalid character";
        const idx = (codePoint+this.position - 65) % this.characterMap.length
        return this.characterMap[idx];
    }
}