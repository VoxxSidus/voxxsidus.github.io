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

// MAIN
function calculatePrice(startRank, endRank) {
    let ash = 0
    let cinders = 0

    // Cinder calculation
    if (endRank > 4) {
        cinders = soulCindersPrices[endRank - 5]
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

// Should be: 5150
console.log(calculatePrice(0, 4))