import React from 'react';
import './HeaderList.scss';
import Triangle from "../../../img/Triangle.png";
import { IColumn } from '../../../Util/Util';

interface IProps {
    columnsList: IColumn[],
    details: boolean,
    sortby: {
        column: String,
        asc: Boolean
    };  
    handleSort: (columnName: String) => void;
}

const HeaderList: React.FC<IProps> = (props) => {
    const { column, asc } = props.sortby;
    return (
        <li className="header">
            <div className="block-list-header">
                {
                    props.columnsList.map(({ id, name, lable }) => {
                        return (
                            <div key={id}>
                                <span onClick={() => props.handleSort(name)}>{lable}</span>
                                {column === name && <img src={Triangle} className={asc ? '' : 'arrowup'} alt="sort arrow" />}
                            </div>
                        )
                    })
                }
                {props.details && <div className="last">More</div>}
            </div>
        </li>
    );
}

export default HeaderList;