export interface IColumn {
    id: number,
    name: string,
    lable: string,
    type: string
}

export interface Block {
    hash: string,
    time: string,
    height: string
}
export interface IBlockList {
    blocks: Block[];
}

export const formatTime = (timeSpan: string): string => {
    let date = new Date(timeSpan);
    let hours = date.getHours();
    let minutes: string = date.getMinutes().toString();
    let seconds: string = date.getSeconds().toString();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = Number(minutes) < 10 ? '0' + minutes : minutes;
    seconds = Number(seconds) < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}:${seconds} ${date.getMilliseconds()}`;
}

/**
 * 
 * @param {string} property
 * 
 *  it Sort the given array based on the passed property
 *  For DEC pass ('-') before property
 * 
 */
export const SortByProp = (property: string) => {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a: any, b: any): number {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
