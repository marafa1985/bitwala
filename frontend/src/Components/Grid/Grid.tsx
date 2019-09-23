import React, { PureComponent } from 'react'
import { SortByProp, Block, IColumn } from "../../Util/Util";
import ItemList from './ItemList/ItemList';
import HeaderList from './HeaderList/HeaderList';
import Paging from './Paging/Paging';
import "./Grid.scss";

interface State {
    data: any[],
    offset: number,
    pages: number,
    limit: number,
    blockList: Block[],
    tempdata?: any[] | undefined,
    sortby: {
        column: String,
        asc: boolean
    }
}

interface IProp {
    data: any[],
    columnsList: IColumn[],
    details: boolean
}
class Grid extends PureComponent<IProp> {
    state: State = {
        data: this.props.data,
        tempdata: this.props.data.slice(0, 10),
        offset: 0,
        pages: Math.ceil(this.props.data.length / 10) - 1,
        limit: 10,
        blockList: [],
        sortby: {
            column: 'time',
            asc: false
        }
    }
    handleSort = (colHeader: String): void => {
        let { sortby } = this.state;
        let newBlockList = this.state.data.sort(SortByProp((sortby.asc ? '-' : '') + colHeader)).slice(0, 10);
        this.setState({
            tempdata: [...newBlockList]
        })
        this.setState({
            offset: 0,
            sortby: {
                column: colHeader,
                asc: !this.state.sortby.asc,
            }
        });
    }
    handlefirstLast = (position: string): void => {
        let arrOffset = 0;
        let pages = Math.ceil(this.state.data.length / 10) - 1;

        if (position === 'last') {
            arrOffset = this.state.data.length > 10 ?
                Math.ceil(this.state.data.length / 10) - 1 :
                Math.floor(this.state.data.length / 10);
        }
        let newDocListorder = this.state.data.slice(arrOffset * this.state.limit, (arrOffset * this.state.limit) + this.state.limit);
        this.setState({
            tempdata: [...newDocListorder]
        });
        this.setState({
            offset: arrOffset,
            pages: pages
        });
    }
    handlePagenation = (setpage: number): void => {

        let { offset, limit } = this.state;
        let pages = Math.ceil(this.state.data.length / 10) - 1;

        if ((offset + setpage) < 0 || offset + setpage > pages) {
            setpage = 0;
        }

        let arrOffset = (offset + setpage) * limit
        let arrSize = arrOffset + limit;
        let newDocListorder = this.state.data.slice(arrOffset, arrSize);
        this.setState({
            tempdata: [...newDocListorder]
        });

        this.setState({
            offset: (offset + setpage)
        });

    }
    renderItems = () => {
        let index = 0;
        return this.state.data.map(({ hash, time, height }: any) => {
            index++;
            return (<li key={time}>
                <div className={"block-list-item " + (index % 2 === 0 ? "dark" : "light")}>
                    <div>{hash}</div>
                    <div>{time}</div>
                    <div>{height}</div>
                </div>
            </li>)
        });
    }
    render() {
        const { sortby, offset, tempdata } = this.state;
        const { columnsList } = this.props;
        return (
            <div className="block-list" >
                <ul>
                    <HeaderList sortby={sortby} handleSort={this.handleSort.bind(this)} columnsList={this.props.columnsList} details={this.props.details}/>
                    {
                        this.state.data.length === 0 ? <div>No data found</div> :
                            <ItemList data={tempdata} columnsList={columnsList} details={this.props.details} />
                    }
                    {this.state.data.length > 10 && <Paging
                        handlefirstLast={this.handlefirstLast.bind(this)}
                        handlePagenation={this.handlePagenation.bind(this)}
                        offset={offset}
                        pages={this.state.data.length > 10 ?
                            Math.ceil(this.state.data.length / 10) :
                            Math.floor(this.state.data.length / 10)} />}
                </ul>
            </div>
        )
    }
}

export default Grid;
