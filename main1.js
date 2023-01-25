const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;

const myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`

const sentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`
console.log(sentence)

myWatchedSeries[2] = "friends"

myWatchedSeries.push("marlon")
myWatchedSeries.unshift("the good doctor")

delete myWatchedSeries[1]

const moneyHeist = myWatchedSeries[2]
console.log(moneyHeist[2])


console.log(myWatchedSeries)