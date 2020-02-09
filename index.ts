// import * as data from './src/data.json'
type point = {
    x: number
    y: number
    label: number
    data: string
}

const data: point[] = require('./src/data.json')

document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('svg')
    const txt = document.querySelector('#text')

    const svge = (tag: string) =>
        document.createElementNS('http://www.w3.org/2000/svg', tag)

    const p = (txt: string) => {
        const p = document.createElement('p')
        p.innerText = txt
        return p
    }

    data.forEach(d => {
        const circle = svge('circle')

        circle.addEventListener('mouseover', e => {
            console.log(d.label)
        })

        circle.setAttribute('cx', `${d.x * 30}`)
        circle.setAttribute('cy', `${d.y * 30}`)
        circle.setAttribute('label', `${d.label}`)

        // text.setAttribute('x', `${d.x * 30 + 10}`)
        // text.setAttribute('y', `${d.y * 30}`)

        svg?.appendChild(circle)
        txt?.appendChild(p(d.data))
    })
})