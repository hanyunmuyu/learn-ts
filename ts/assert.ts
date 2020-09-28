enum lee {
    A,
    B = "b"
}

console.log(<number>(lee.A))
console.log(<string>(lee.B))
