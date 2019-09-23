import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Block_LIST } from "../Queries/index";
import { Grid, Loading } from "../Components/index";
import { IColumn, IBlockList } from "../Util/Util";
import './BlockList.scss';

const BlockList: React.FC = () => {
    const { loading, error, data } = useQuery(Block_LIST);
    const columnsList: IColumn[] = [
        { id: 1, name: "hash", lable: "Hash", type: "string" },
        { id: 2, name: "time", lable: "Time", type: "time" },
        { id: 3, name: "height", lable: "Height", type: "string" }];
    if (loading) return <Loading />;
    if (error) return <p>error: {error}</p>;
    const datasource = data.blockList.blocks as IBlockList[]
    return (
        <div>
            <Grid data={datasource} columnsList={columnsList} details={true}/>
        </div>
    );
}

export default BlockList;
