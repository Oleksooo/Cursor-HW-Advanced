let n = Number(prompt('Введіть число N'));
while (n == NaN || !Number.isInteger(n)) {
    n = +prompt('Не вірно введене число N, cпробуйте ще раз');   
}

let m = Number(prompt('Введіть число M'));
while (m == NaN || !Number.isInteger(m)) {
    m = +prompt('Не вірно введене число M, cпробуйте ще раз');
}

let skipPairNumbers = confirm("Пропускати парні числа?");

let total;
for(total = 0; n <= m; ++n){
    if(skipPairNumbers && n % 2 == 0 ){
        continue
    } else{
        total += n
    }
}

document.writeln(`Число N: ${n} <br>`)
document.writeln(`Число M: ${m} <br>`)
document.writeln(`Пропускати парні числа? -${skipPairNumbers} <br>`)
document.writeln(`Результат: ${total}`)