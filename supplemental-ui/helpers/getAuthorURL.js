'use strict'

module.exports = (authorName) => {
    if (!authorName) {
        return ''
    }

    const parts = authorName.split(' ')
    let resultAnchor = ""
    parts.forEach(part => {
        resultAnchor += `_${part.toLowerCase()}`
    })

    return resultAnchor
}
