import { IBlocks } from './Types';
import fetch from 'node-fetch';

export const resolvers = {
    Query: {
        blockList: async () => {
            let response = await fetch('https://blockchain.info/blocks?format=json');
            let returnValue: IBlocks = await response.json();
            return returnValue;
        },
        blockDetails: async (_: any, { hash }: any, info: any) => {
            let response = await fetch(`https://blockchain.info/rawblock/${hash}`);
            let returnValue = await response.json();
            return returnValue;
        }
    }
}