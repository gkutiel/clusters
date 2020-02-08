import * as data from './src/data.json'

document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('svg')
    const svge = (tag: string) =>
        document.createElementNS('http://www.w3.org/2000/svg', tag)

    console.log('typeof', typeof data)
    Object.values(data).forEach(d => {
        console.log(d)
        const circle = svge('circle')
        const text = svge('text')
        text.textContent = d.data

        circle.addEventListener('mouseover', e => {
            console.log(d.label)
        })

        circle.setAttribute('cx', `${d.x * 30}`)
        circle.setAttribute('cy', `${d.y * 30}`)
        circle.setAttribute('label', `${d.label}`)

        text.setAttribute('x', `${d.x * 30 + 10}`)
        text.setAttribute('y', `${d.y * 30}`)

        svg?.appendChild(circle)
        svg?.appendChild(text)
    })
})