abstract class user {
    title: string
    abstract say(): string
    hi(): void {
        console.log('hi')
    }
}
class lee extends user {
    title: string = '乐编码'
    say(): string {
        return this.title
    }
}
let l = new lee()
console.log(l.say())
l.hi()