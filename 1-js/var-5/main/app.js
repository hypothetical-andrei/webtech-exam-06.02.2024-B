class SomeType {
    constructor (name) {
        this.name = name
    }
}

function decorate (func, name, extension) {
    // TODO
}

const app = {
    SomeType,
    decorate
}

module.exports = app