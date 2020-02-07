import { LoremIpsum } from 'lorem-ipsum'

type point = {
    x: number,
    y: number,
    label: string,
    cluster: number,
}

function randomData(
    count: number,
    max_x: number,
    max_y: number,
    num_clusters: number
) {
    const li = new LoremIpsum()
    const rnd = (n: number) => () =>
        Math.round(Math.random() * n)


    const rnd_x = rnd(max_x)
    const rnd_y = rnd(max_y)
    const rnd_cluster = rnd(num_clusters)
    const points: point[] = []

    for (let i = 0; i < count; i++) {
        points.push({
            x: rnd_x(),
            y: rnd_y(),
            label: li.generateSentences(),
            cluster: rnd_cluster()
        })
    }
    return points
}

export const data = randomData(50, 600, 400, 10)