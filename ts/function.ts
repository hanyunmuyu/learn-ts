function lee() {
    console.log('乐编码')
}
lee()

function lee1(title: string) {
    console.log(title)
}
function lee2(title) {
    console.log(<string>title)
}
lee2('乐编码')

let lee3 = () => {
    console.log('匿名参数')
}
lee3()

function lee4(...title: string[]) {
    console.log(title)
}
lee4('乐编码', '作者', '寒云')


function lee5(title: string): string {
    return title
}
lee5('乐编码')

interface leeI {
    title: string
}
function lee6(title: string): leeI {
    return { title: title }
}
console.log(lee6('乐编码'))
