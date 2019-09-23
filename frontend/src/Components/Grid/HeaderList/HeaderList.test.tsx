import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import HeaderList from './HeaderList';
import { IColumn } from "../../../Util/Util";

describe('Test HeaderList Compnent', () => {
    it('Check if the column More redered id the details= false', () => {
        let columnsList: IColumn[] = [
            {
                id: 1, name: "test", lable: "test", type: "string"
            }
        ];
        const div = document.createElement('div');
        ReactDOM.render(<HeaderList columnsList={columnsList}
            details={false} handleSort={() => { }} sortby={{ asc: false, column: "test" }} />, div);
        expect(div.textContent).not.toContain("More");
        ReactDOM.unmountComponentAtNode(div);

    });
    it('Check if the column More redered id the details= true', () => {
        let columnsList: IColumn[] = [
            {
                id: 1, name: "test", lable: "test", type: "string"
            }
        ];
        const div = document.createElement('div');
        ReactDOM.render(<HeaderList columnsList={columnsList}
            details={true} handleSort={() => { }} sortby={{ asc: false, column: "test" }} />, div);
        expect(div.textContent).toContain("More");
        ReactDOM.unmountComponentAtNode(div);

    });
});