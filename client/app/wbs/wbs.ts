import { Material } from '../material/material';

export class Wbs {
    id: number;
    code: string;
    desc: string = '';
    start: number = 0;
    qty: number = 0;
    uom: string = '';
    index: number = 0;
    material: Material[];
    sub: Wbs[];

    constructor (id = 0, code = '', desc = '', start = 0, parent = 0, index = 0) {
        return this;
    }
}