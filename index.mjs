import fs from 'fs/promises'

async function vytvorSoubory() {
    let count

    try {
        const data = await fs.readFile('instrukce.txt')
        count = Number(data.toString()) 
        console.log("V souboru je napsáno číslo: " + count)
    } catch (err) {
        console.error(err)
    } 

    const promises = []
    for (let i = 0; i < count; i++) {
        promises.push(fs.writeFile(`${i}.txt`, `Soubor ${i}`));
    }

    try {
        await Promise.all(promises)
        console.log("Všechny soubory byly vytvořeny!")
    } catch (err) {
        console.error(err)
    } 

}
vytvorSoubory()
