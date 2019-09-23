import React from 'react';
import './Paging.scss';

interface Props {
    handlefirstLast: (page: string) => void,
    handlePagenation: (page: number) => void,
    offset: number,
    pages: number
}
const Paging: React.FC<Props> = (props) => {
    return (
        <li>
            <div className="block-list-footer">
                <ul>
                    <li className="arrow"><div onClick={() => props.handlefirstLast('first')}>{"<<"}</div></li>
                    <li className="arrow"><div onClick={() => props.handlePagenation(-1)}>{"<"}</div></li>
                    <li>{`${props.offset + 1} of ${props.pages}`}</li>
                    <li className="arrow"><div onClick={() => props.handlePagenation(1)}>{">"}</div></li>
                    <li className="arrow"><div onClick={() => props.handlefirstLast('last')}>{">>"}</div></li>
                </ul>
            </div>
        </li>
    )
}

export default Paging;
