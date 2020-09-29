class lee {
    protected title: string
    author: string
    private age: number = 1
    readonly description: string = '快乐编码，快乐生活！'

    constructor(title: string) {
        this.title = title;
    }
}


class editor extends lee {
    static language: string = 'ts'
    write() {
        console.log(this.title)
        console.log(this.description)
    }
}

