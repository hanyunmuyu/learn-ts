class lee {
    private _title: string
    constructor(title: string) {
        this._title = title
    }
    set title(title: string) {
        this._title = title
    }
    get title(): string {
        return this._title
    }
    sayTitle(): void {
        console.log(this._title)
    }
}
let l = new lee('乐编码')
l.sayTitle()
l.title = '哈哈哈哈'
l.sayTitle()