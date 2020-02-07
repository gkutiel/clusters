import * as d3 from 'd3'

document.addEventListener('DOMContentLoaded', () => {
    d3
        .select('svg')
        .selectAll('circle')
        .data([
            [1, 2],
            [2, 2],
            [3, 4],
        ])
        .enter().append('circle')
        .attr('r', 3)
        .attr('fill', 'blue')
        .attr('cx', xy => xy[0] * 30)
        .attr('cy', xy => xy[1] * 30)
        .style('color', () => {
            return ['blue', 'red'][1]
        })
})