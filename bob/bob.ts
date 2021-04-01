class Bob {
    hey( say: string ): string {
        if (say.replace(/\s/g, '') === '') {
            return 'Fine. Be that way!'
        } else if (say.match(/[a-z]/i) && say.toUpperCase() === say) {
            return 'Whoa, chill out!'
        } else if (say.endsWith('?')) {
            return 'Sure.'
        }
        return 'Whatever.'
    }
}

export default Bob