import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import Grid from '../Grid';
import { IColumn } from "../../../Util/Util";

describe('Test Grid Compnent', () => {
    it("If The Grid didn's contains any data: return No data Found", () => {
        let columnsList: IColumn[] = [
            {
                id: 1, name: "test", lable: "test", type: "string"
            }
        ];
        const div = document.createElement('div');
        ReactDOM.render(<Grid columnsList={columnsList} data={[]} details={false} />, div);
        expect(div.textContent).toContain("No data found");
        ReactDOM.unmountComponentAtNode(div);

    });

    it("If The Grid to contains any data: return li", () => {
        let columnsList: IColumn[] = [
            {
                id: 1, name: "test", lable: "test", type: "string"
            }
        ];
        let data = [{
            test:"special test"
        }]
        const div = document.createElement('div');
        ReactDOM.render(<Grid columnsList={columnsList} data={data} details={false} />, div);
        expect(div.textContent).toContain("special test");
        ReactDOM.unmountComponentAtNode(div);

    });

});