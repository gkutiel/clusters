
type point = {
    x: number
    y: number
    label: number
    data: string
}

const data: point[] = require('./data.json')

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


    const svg = document.querySelector('svg')
    const txt = document.querySelector('#text')

    const svge = (tag: string) =>
        document.createElementNS('http://www.w3.org/2000/svg', tag)

    const t = (txt: string) => {
        const i = document.createElement('p')
        i.innerText = txt
        return i
    }

    const e = (tag: string) => document.createElement(tag)

    function get_g(label: number) {
        const g = document.querySelector(`g[label='${label}']`)
        if (g)
            return g

        const gg = svge('g')
        gg.setAttribute('label', `${label}`)
        svg?.appendChild(gg)
        return gg
    }

    function get_txt_g(label: number) {
        const g = document.querySelector(`.txt[label='${label}']`)
        if (g)
            return g

        const gg = e('div')
        gg.id = `l${label}`
        gg.className = 'txt'
        gg.setAttribute('label', `${label}`)
        txt?.appendChild(gg)
        return gg
    }

    data.forEach(d => {
        const circle = svge('circle')

        circle.addEventListener('click', e => {
            window.location.hash = `l${d.label}`
        })

        circle.setAttribute('cx', `${scale_x(d.x)}`)
        circle.setAttribute('cy', `${scale_y(d.y)}`)
        circle.setAttribute('label', `${d.label}`)

        get_g(d.label).appendChild(circle)
        get_txt_g(d.label).appendChild(t(d.data))
    })
})