import { Observer } from './types'

const coloredDisplay = (): Observer => {
    
    const update = (value: number) => {
        console.log('\x1b[33m%s\x1b[0m', `Display colorido: ${value}`)
    }

    return {
        update,
    }
}

export default coloredDisplay;