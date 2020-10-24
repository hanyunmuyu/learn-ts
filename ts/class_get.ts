class lee {
    private _title: string
    get title(): string {
        return this._title
    }
    set title(title: string) {
        this._title = title
    }

}
let l = new lee()
l.title = '乐编码'
console.log(l.title)