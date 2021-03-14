import {decode} from 'html-entities';

export function capitalize(text: string): string {
    return text.slice(0,1).toUpperCase() + text.substr(1)
}

export function decodeHTMLEntities(text: string): string {
    return decode(text)
}