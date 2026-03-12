/**
 * @param {number[]} enemyEnergies
 * @param {number} currentEnergy
 * @return {number}
 */
var maximumPoints = function(enemyEnergies, currentEnergy) {
    let minEnergy = Number.MAX_SAFE_INTEGER;
    let total = currentEnergy;

    for (const energy of enemyEnergies) {
        minEnergy = Math.min(minEnergy, energy);
        total += energy;
    }

    if (currentEnergy < minEnergy) {
        return 0;
    }

    return Math.floor((total - minEnergy) / minEnergy);
};