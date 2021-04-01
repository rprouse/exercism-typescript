class Transcriptor {
    toRna(dna: string): string {
        return dna.split('')
                  .map(this.transcribe)
                  .join('')
    }

    transcribe(dna: string): string {
        switch (dna) {
            case 'C':
                return 'G'
            case 'G':
                return 'C'
            case 'A':
                return 'U'
            case 'T':
                return 'A'
            default:
                throw Error('Invalid input DNA.')
        }
    }
}

export default Transcriptor