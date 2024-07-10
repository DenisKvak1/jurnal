import {Mark} from "@/types.ts";

export function stringToMark(value: string): Mark {
    const asNumber = +value
    if(isNaN(asNumber)) {
        return value as Mark
    } else{
        return asNumber as Mark
    }
}