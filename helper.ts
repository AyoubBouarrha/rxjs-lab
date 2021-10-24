import * as colors from 'colors';colors;

export function textColor(color: string, text : string): string {
    //🔴🔵🟡🟢⚪🟠🟣🟤
    switch (color) {
        case 'green':
            return `🟩 ${text}`.green;
        case 'blue':
            return `🟦 ${text}`.blue;
        case 'red':
            return `🟥 ${text}`.red;
        case 'yellow':
            return `🟨 ${text}`.yellow;
        default:
            return `⬜ ${text}`.white;
    }
}