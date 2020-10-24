interface user {
    title: string
    say(): void
}

class hanyun implements user {
    title: string = '乐编码'
    say(): void {
        console.log(this.title)
    }
}
class tom implements user {
    title: string = 'tom'
    say(): void {
        console.log(this.title)
    }
}

let u: user
u = new hanyun()
u.say()
u = new tom()
u.say()