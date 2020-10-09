/**
---------------------
First Letter Grouping
---------------------

Diberikan sebuah variabel `name`. Buatlah sebuah script untuk menampilkan nama tersebut
berada di group ke-berapa, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka tampilkan 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka tampilkan 'Masuk group kedua'
- Selain itu tampilkan 'Masuk group terakhir'

Contoh:
- `name` = 'daniel', output: 'Masuk group pertama'
- `name` = 'immelda', output: 'Masuk group kedua'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'

*/

const grup = (nama) => {
    let firstLetter = nama.charAt(0);
    if (firstLetter == 'a'||
        firstLetter =='b' ||
        firstLetter =='c' ||
        firstLetter =='d') {
        console.log('masuk group pertama')
    }else if(firstLetter =='e'||
            firstLetter =='f'||
            firstLetter =='g'||             
            firstLetter =='h'){
        console.log('masuk group kedua')
    }else{
        console.log('masuk group terakhir')
    }
}

console.log(grup("daniel"))
console.log(grup("himelda"))
console.log(grup("taufik"))