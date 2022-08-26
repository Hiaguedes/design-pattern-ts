import { Observer } from './types'

const Display = (): Observer => {

    const update = (value: number) => {
        console.log(`Display exibindo numero ${value}`)
    }

    return {
        update,
    }

}

export default Display;
