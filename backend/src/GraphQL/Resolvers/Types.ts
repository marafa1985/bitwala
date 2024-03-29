export interface IBlock {
    height: number;
    hash: number;
    time: number;
    main_chain: boolean;
};

export interface IBlocks {
    blocks: IBlock[];
};
