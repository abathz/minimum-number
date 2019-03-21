export const serializeValue = (value) => {
  let arr = []
  let rupiahFraction = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50]
  let regex = /([a-zA-Z\ ]*)(\d*[\,\ \.]\d*|\d+)([a-zA-Z]+|\,\d*|\d*)/g
  let resultRegex = regex.exec(value)

  if (resultRegex === null || resultRegex[2].search(/[\,\ ]/g) > 0 || resultRegex[3] === 'rp') {
    return 'Input invalid!'
  } else {
    let rupiah = Number(resultRegex[2].replace(/\./g, ''))
    for (let i = 0; i < rupiahFraction.length; i++) {
      if (rupiah >= rupiahFraction[i]) {
        let fraction = rupiah / rupiahFraction[i];
        rupiah = rupiah % rupiahFraction[i]
        arr.push({ fraction: rupiahFraction[i], total: Math.floor(fraction) })
      }
    }
  }

  return arr
}