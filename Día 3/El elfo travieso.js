function findNaughtyStep(original, modified) {
    let resultArray = [...original].filter((char) => !modified.includes(char))
    resultArray = resultArray.concat([...modified].filter((char) => !original.includes(char)))
    return resultArray.join('').charAt(0)
}

console.log(findNaughtyStep('abc', 'abcde'))

