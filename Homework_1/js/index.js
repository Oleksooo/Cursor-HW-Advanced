const Bounty = 16.678;
const Twix = 123.965;
const Kinder = 90.2345;

const max = Math.max(Bounty, Twix, Kinder)
const min = Math.min(Bounty, Twix, Kinder)

const totalCost = Bounty + Twix + Kinder

const totalCostFloor = Math.floor(Bounty) + Math.floor(Twix) + Math.floor(Kinder)

const totalCostCeil = Math.ceil(totalCostFloor / 100) * 100

const pairNumber = totalCostFloor % 2 === 0 ? "- парне" : "- не парне"

const change = 500 - totalCost

const average = (totalCost / 3).toFixed(2)

function getRandom(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
const discount = getRandom(0, 50)

const randomDiscount = (totalCost - discount).toFixed(2)

const profit = (totalCost / 2) - discount


document.writeln(`Bounty:  ${Bounty} <br>`)
document.writeln(`Twix: ${Twix} <br>`)
document.writeln(`Kinder: ${Kinder} <br>`)

document.writeln(`Максимальне число ${max} <br>`)
document.writeln(`Мінімальне число ${min} <br>`)
document.writeln(`Сума товарів ${totalCost} <br>`)
document.writeln(`Без копійок, округлення в меншу сторону ${totalCostFloor} <br>`)
document.writeln(`Сума, округлена до сотень ${totalCostCeil} <br>`)
document.writeln(`Чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? ${pairNumber} <br>`)
document.writeln(`Решта з 500грн., без округлення ${change} <br>`)
document.writeln(`Середня ціна, округлена до другого знаку ${average} <br>`)
document.writeln(`Випадкова знижка ${discount}грн. <br>`)
document.writeln(`Сума до сплати, після випадкової знижки ${randomDiscount} <br>`)
document.writeln(`Чистий прибуток ${profit} <br>`)