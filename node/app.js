const express = require('express');
const app = express();

let dishes = [{
    id: 1,
    name: 'Gulasz paprykowo-śmietankowy',
    stars: 4,
    time: '1h: 20min',
    desc: 'Gulasz paprykowo-śmietankowy wydobywa z wieprzowiny i warzyw ich najlepsze aromaty i smaki.',
    level: 'łatwy',
    ingredients: [
        {id: 1, name: 'Polędwica wieprzowa ', value: '500g'},
        {id: 2, name: 'Czerwona cebula', value: '1'},
        {id: 3, name: 'Papryka czerwona ', value: '3'},
        {id: 4, name: 'Olej', value: '2 łyżki'},
        {id: 5, name: 'Śmietanka 30% ', value: '200g'},
        {id: 6, name: 'Masło ', value: '1 łyżka'},
        {id: 7, name: 'Sól', value: 'trochę'},
        {id: 8, name: 'Ziemniaki', value: '1kg'},
        {id: 9, name: 'Margaryna ', value: '2 łyżeczki'},
    ],
    howToMake: [
        {step: 1, desc: 'Papryki przekroić na pół, oczyścić i ułożyć na blasze przecięciem do dołu. '},
        {step: 2, desc: 'Piec w nagrzanym piekarniku (w zależności od grubości skóry papryki) ok. 20- 40 min. w temperaturze ok. 220°C (aż skórka popęka i zrobi się ciemna). '},
        {step: 3, desc: 'Mięso oczyścić i pokroić w kostkę. Cebulę obrać i pokroić w półplasterki. Mięso przysmażyć na oleju. Kolejno dodać cebulę i trochę podsmażyć. Całość zalać rosołem, przykryć i dusić na małym ogniu ok. 30- 40 min., aż mięso będzie miękkie. Paprykę dodajemy na 10-15 minut przed końcem duszenia mięsa. '},
        {step: 4, desc: 'Na końcu dodać zimne masło czosnkowo- ziołowe, i pokrojoną w paski paprykę. Podawać z ziemniakami. '},
]},
{
    id: 2,
    name: 'Pasta jajeczno-pieczarkowa',
    stars: 5,
    time: '1h: 10min',
    desc: 'Znana wszystkim dobrze pasta jajeczna, tym razem z dodatkiem pieczarek.',
    level: 'średni',
    ingredients: [
        {id: 1, name: 'Majonez Dekoracyjny WINIARY ', value: '100g'},
        {id: 2, name: 'Pieczarki ', value: '500g'},
        {id: 3, name: 'Jajko gotowane na twardo  ', value: '4'},
        {id: 4, name: 'Cebula', value: '2'},
        {id: 5, name: 'Olej', value: 'trochę'},
        {id: 6, name: 'Sól ', value: 'trochę'},
        {id: 7, name: 'Sól', value: 'trochę'},
        {id: 8, name: 'Pieprz czarny', value: 'trochę'},
    ],
    howToMake: [
        {step: 1, desc: 'Cebulę pokroić w prążki i podsmażyć na oleju. '},
        {step: 2, desc: 'Pieczarki obrać, oczyścić i zetrzeć na tarce do jarzyn. Tak przygotowane pieczarki dodać do smażonej cebuli. Dusić wszystko razem, aż pieczarki puszczą sok.  '},
        {step: 3, desc: 'Jajka obrać i zetrzeć na tej samej tarce, co pieczarki. Kiedy wystygną smażone pieczarki, odlać z nich wodę i połączyć z jajkami. Doprawić majonezem oraz przyprawami. Pasta do chleba gotowa.'},
]},
{
    id: 3,
    name: 'Ziołowe roladki z grillowanego bakłażana',
    stars: 4,
    time: '31min',
    desc: 'Idealna przystawka z grilla :)',
    level: 'trudny',
    ingredients: [
        {id: 1, name: 'Cebula czerwona ', value: '1'},
        {id: 2, name: 'Cebula Biała Y', value: '1'},
        {id: 3, name: 'Marchewka', value: '2'},
        {id: 4, name: 'Kolba kukurydzy', value: '2'},
        {id: 5, name: 'Fasola czerwona   ', value: '1 puszka'},
        {id: 6, name: 'Papryczka chili  ', value: '1'},
        {id: 7, name: 'Oliwa', value: '3 łyżek '},
    ],
    howToMake: [
        {step: 1, desc: 'Bakłażana kroimy w cienkie plasterki ok 0,5 cm. Plasterki solimy i odstawiamy na ok 5 minut '},
        {step: 2, desc: 'Po tym czasie smaruje olejem z zalewy z suszonych pomidorów i grillujemy z obu stron. '},
        {step: 3, desc: 'Przygotowujemy farsz. Do miseczki dodajemy ser feta i 5 łyżek sosu ziołowego Winiary. Łączymy razem za pomocą widelca. Pomidory odsączamy z zalewy i siekamy, mieszamy razem. '},
        {step: 4, desc: 'Kady plasterek bakłażana smarujemy po całości farszem. Układamy kilka listrów rukoli i zwijamy w ruloniki. '},
        {step: 5, desc: 'Podajemy posypane pestkami granata, '},
]},
{
    id: 4,
    name: 'Zupa meksykańska z ziemniakami',
    stars: 3,
    time: '1h: 01min',
    desc: 'Niezły meksyk! Tym razem w wegetariańskim, a nawet wegańskim wydaniu. ',
    level: 'trudny',
    ingredients: [
        {id: 1, name: 'Polędwica wieprzowa ', value: '500g'},
        {id: 2, name: 'Czerwona cebula', value: '1'},
        {id: 3, name: 'Papryka czerwona ', value: '3'},
        {id: 4, name: 'Olej', value: '2 łyżki'},
        {id: 5, name: 'Śmietanka 30% ', value: '200g'},
        {id: 6, name: 'Masło ', value: '1 łyżka'},
        {id: 7, name: 'Sól', value: 'trochę'},
        {id: 8, name: 'Ziemniaki', value: '1kg'},
        {id: 9, name: 'Margaryna ', value: '2 łyżeczki'},
    ],
    howToMake: [
        {step: 1, desc: 'Cebule obrać, pokroić w półksiężyce '},
        {step: 2, desc: 'Kolby kukurydzy umyć, obrać z liści, oddzielić ziarna.  '},
        {step: 3, desc: 'Papryczkę chilli przekroić na pół, usunąć pesteczki. Drobno posiekać. '},
        {step: 4, desc: 'Ziemniaki i marchewki obrać, pokroić w grubą kostkę.'},
        {step: 5, desc: 'Podsmażone warzywa zalać bulionem warzywnym.  '},
        {step: 6, desc: 'W międzyczasie pomidory oparzyć, obrać ze skóry i pokroić na mniejsze kawałki.   '},
        {step: 7, desc: 'Kiedy ziemniaki zaczną mięknąć, dodać pomidory, fasolę i groszek.   '},
        {step: 8, desc: 'Całość pogotować jeszcze przez ok. 5 minut.    '},
        {step: 9, desc: 'Doprawić do smaku solą i pieprzem.   '},
]},
];

app.get('/getDishes', (req, res)=> {
    res.json({
        data: dishes,
    })

})

app.listen(3000, (req, res) => {
    console.log('Express API is running at port 3000');
})