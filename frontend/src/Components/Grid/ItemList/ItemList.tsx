import React, { useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';
import { IColumn, formatTime } from '../../../Util/Util';
import ArrowDown from "../../../img/arrow-down.svg";
import './ItemList.scss';


interface IProps {
    data: any[] | undefined,
    columnsList: IColumn[],
    details: boolean
}
const ItemList: React.FC<IProps> = (props): any => {
    const [showdetails, setshowdetails] = useState(-1)
    let index = 0;
    const formatValue = (row: any, column: IColumn): string => {
        switch (column.type) {
            case "time":
                return formatTime(row[column.name]);
            default:
                return row[column.name]
        }
    }
    const showhide = (currentIdx: number) => {
        if (currentIdx === showdetails) {
            setshowdetails(-1)
        }
        else {
            setshowdetails(currentIdx);
        }

    }
    return props.data && props.data.map((row: any, idx: number) => {
        index++;
        return (
            <li key={idx} >
                <div className={"block-list-item " + (index % 2 === 0 ? "dark" : "light")}
                    onClick={() => { showhide(idx) }}>
                    {props.columnsList.map((col) => {
                        return <div key={col.id + col.name}>{formatValue(row, col)}</div>
                    })}
                    {props.details && <div className={"last" + (showdetails === idx ? " active" : "")}>
                        <div className="icon">
                            <img src={ArrowDown} alt="details" />
                        </div>
                    </div>}
                </div>
                {props.details && <div className={"details" + (showdetails === idx ? " expand" : "")}>
                    {showdetails === idx &&
                        <ItemDetails hash={row["hash"]} className={(index % 2 === 0 ? "dark" : "light")} />
                    }
                </div>}
            </li>
        )
    });
}

export default ItemList;
