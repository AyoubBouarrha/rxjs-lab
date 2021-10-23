import * as colors from 'colors';colors;

export function color(colortText: string): string {
    //🔴🔵🟡🟢⚪🟠🟣🟤
    switch (colortText) {
        case 'green':
            return "🟩 Green".green;
        case 'blue':
            return "🟦 Blue".blue;
        case 'red':
            return "🟥 Red".red;
        case 'yellow':
            return "🟨 Yellow".yellow;
        default:
            return "⬜ white".white;
    }
}