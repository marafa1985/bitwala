import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Block_DETAILS } from "../../../Queries/index";
import Loading from '../../Loading/Loading';
import './ItemDetails.scss';
import Grid from '../Grid';
import { IColumn } from '../../../Util/Util';


interface IProps {
    hash: string,
    className: string
}
const ItemDetails: React.FC<IProps> = (props): any => {
    const { loading, error, data } = useQuery(Block_DETAILS, {
        variables: {
            hash: props.hash
        }
    });

    if (loading) return <Loading />;
    if (error) return <p>error: {error}</p>;
    const { block_index, prev_block, size, tx } = data.blockDetails;
    const columnsList: IColumn[] = [
        { id: 1, name: "hash", lable: "Hash", type: "string" },
        { id: 2, name: "tx_index", lable: "Transaction Index", type: "string" },
        { id: 3, name: "weight", lable: "Weight", type: "string" }
    ];
    return (
        <div className="block-details">
            <div className="block">
                <div className={"detail-List dark"}>
                    <div className="info">
                        <div className="lable">Size:</div>
                        <div className="value">{size}</div>
                    </div>
                    <div className="info">
                        <div className="lable">Block index:</div>
                        <div className="value">{block_index}</div>
                    </div>
                    <div className="info">
                        <div className="lable">Previous hash:</div>
                        <div className="value">{prev_block}</div>
                    </div>
                </div>
                <Grid columnsList={columnsList} data={tx} details={false} />
            </div>

        </div>
    );
}

export default ItemDetails;