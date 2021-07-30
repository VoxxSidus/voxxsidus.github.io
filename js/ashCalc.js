// Legendary Crafting Calculator
// 7/28/2021

// PRICES
// ilvl: 190, 210, 225, 235
const soulAshPrices = [1250, 2000, 3200, 5150]
// ilvl: 249, 262
const soulCindersPrices = [1100, 1650]

// SETTINGS
const minRank = 1
const maxRank = 6

let userStartRank = 0
let userFinalRank = 0

// Elements
const ashPriceText = document.getElementById("price-ash")
const cindersPriceText = document.getElementById("price-cinders")

// MAIN
function calculatePrice(startRank, endRank) {
    let ash = 0
    let cinders = 0

    // Cinder calculation
    if (endRank > 4 && startRank != endRank) {
        if (startRank <= 4) {
            cinders = soulCindersPrices[endRank - 5]
        }
        else if (startRank === 5) {
            cinders = soulCindersPrices[1] - soulCindersPrices[0]
        }
    }

    // Ash calculation
    if (startRank < 4) {
        // Fresh craft
        if (startRank < minRank) {
            if (endRank > 4) {
                ash = soulAshPrices[3] // Max ash
            }
            else {
                ash = soulAshPrices[endRank - 1]
            }
        }

        // Has starting piece
        else {
            let constrainedEndRank = 0
            if (endRank > 4) {
                constrainedEndRank = 4
            }
            else {
                constrainedEndRank = endRank
            }

            ash = soulAshPrices[constrainedEndRank - 1] - soulAshPrices[startRank - 1]
        }
    }

    return [ash, cinders]
}

function updatePrice(calcData) {
    // TODO: filter out NaN / undefined
    if (calcData[0] <= 0 || isNaN(calcData[0])) {
        ashPriceText.innerText = "ASH: 0"
    }
    else {
        ashPriceText.innerText = "ASH: " + calcData[0]
    }
    cindersPriceText.innerText = "CINDERS: " + calcData[1]
}

const startButtons = document.getElementsByClassName("ilvl-btn-start")
const finalButtons = document.getElementsByClassName("ilvl-btn-final")

// Initiate startButtons
for (let i = 0; i < startButtons.length; i++) {
    startButtons[i].addEventListener("click", function() {
        console.log("clicked")
        for (let j = 0; j < startButtons.length; j++) {
            startButtons[j].classList.remove("active")
        }
        startButtons[i].classList.add("active")
        userStartRank = i
        updatePrice(calculatePrice(userStartRank, userFinalRank))
    })
}

// Initiate finalButtons
for (let i = 0; i < finalButtons.length; i++) {
    finalButtons[i].addEventListener("click", function() {
        console.log("clicked")
        for (let j = 0; j < finalButtons.length; j++) {
            finalButtons[j].classList.remove("active")
        }
        finalButtons[i].classList.add("active")
        userFinalRank = i + 1
        updatePrice(calculatePrice(userStartRank, userFinalRank))
    })
}

console.log("setup")
