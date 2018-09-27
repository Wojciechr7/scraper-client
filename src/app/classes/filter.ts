import {FilterInput} from '../interfaces/filter-input';

export class Filter {

    private filterInputs: Array<FilterInput>;

    constructor() {
        this.filterInputs = [
            {
                id: 0,
                data: ''
            }
        ];
    }

    get FilterInputs(): Array<FilterInput> {
        return this.filterInputs;
    }

    public apply(ds, filterValue: string, id: number): void {
        this.filterInputs[id].data = filterValue.trim().toLowerCase();
    }

    public addNew(clearInput: FilterInput): void {
        if (this.filterInputs.length < 3) {
            this.filterInputs.push(clearInput);
        }
    }

    public removeOne(): void {
        if (this.filterInputs.length > 1) {
            this.filterInputs.pop();
        }
    }

    public setFilter(data, filters) {
        let counter = 0;
        let matched = [];
        for (const filter of filters) {

                if (data.name.indexOf(filter.data) !== -1) {
                    matched[counter] = true;
                }

            if (matched[counter] === undefined) {
                matched[counter] = false;
            }
            counter++;
        }

        for (let i in matched) {
            if (matched[i] === false) {
                return false;
            }
            if ((parseInt(i) + 1) === matched.length) {
                return true;
            }
        }
        return false;
    }


}
