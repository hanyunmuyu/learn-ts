interface lee {
    name: string
    age?: number
    readonly description: string,
    sayHello: () => void,
    languages: string[],
}

const arg: lee = {
    name: '乐编码',
    description: "快乐编码，快乐生活！",
    sayHello: () => {
        console.log("你好！")
    },
    languages: ["js", 'ts', 'go', 'php']
}

const f = (a: lee) => {
    a.sayHello()
    console.log(a.languages)
}

f(arg)


interface lee2 extends lee {
    height: number
}

class hanyun implements lee2 {
    name = '乐编码'
    description = "快乐编码，快乐生活！"
    languages = ["js", 'ts', 'go', 'php']
    height = 100

    sayHello() {
        console.log('hello,我会这么多语言')
        console.log(this.languages)
    }
}

let func=new hanyun()
func.sayHello()
