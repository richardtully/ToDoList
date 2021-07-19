class HandleSubmit {
    constructor() {
        this.submitted = ''
    }

    onSubmit(data){
        this.submitted.word = data
        return this.submitted
    }

    printHello(){
        console.log('hellohellohello')
    }
}

export default HandleSubmit
