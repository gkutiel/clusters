// import * as data from './src/data.json'
type point = {
    x: number
    y: number
    label: number
    data: string
}

const data: point[] = require('./src/data.json')

document.addEventListener('DOMContentLoaded', () => {
    const xs = data.map(d => d.x)
    const ys = data.map(d => d.y)
    const max_x = Math.max(...xs)
    const min_x = Math.min(...xs)
    const max_y = Math.max(...ys)
    const min_y = Math.min(...ys)

    const scale_x = (x: number) =>
        (x - min_x) * 100 / (max_x - min_x)

    const scale_y = (y: number) =>
        (y - min_y) * 100 / (max_y - min_y)

    console.log(min_x, max_x, min_y, max_y)

    const svg = document.querySelector('svg')
    const txt = document.querySelector('#text')

    const svge = (tag: string) =>
        document.createElementNS('http://www.w3.org/2000/svg', tag)

    const t = (txt: string) => {
        const i = document.createElement('li')
        i.innerText = txt
        return i
    }

    data.forEach(d => {
        const circle = svge('circle')

        circle.addEventListener('mouseover', e => {
            console.log(d.label)
        })

        circle.setAttribute('cx', `${scale_x(d.x)}`)
        circle.setAttribute('cy', `${scale_y(d.y)}`)
        circle.setAttribute('label', `${d.label}`)

        // text.setAttribute('x', `${d.x * 30 + 10}`)
        // text.setAttribute('y', `${d.y * 30}`)

        svg?.appendChild(circle)
        txt?.appendChild(t(d.data))
    })
})