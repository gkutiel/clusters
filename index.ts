import { data } from './src/data'
import { text } from 'd3'

document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('svg')
    const svge = (tag: string) =>
        document.createElementNS('http://www.w3.org/2000/svg', tag)

    data.forEach(d => {
        console.log(d)
        const circle = svge('circle')
        const text = svge('text')
        text.textContent = d.label

        circle.addEventListener('mouseover', e => {
            console.log(d.label)
        })

        circle.setAttribute('cx', `${d.x}`)
        circle.setAttribute('cy', `${d.y}`)
        circle.setAttribute('cluster', `${d.cluster}`)

        text.setAttribute('x', `${d.x + 10}`)
        text.setAttribute('y', `${d.y}`)

        svg?.appendChild(circle)
        svg?.appendChild(text)
    })
})