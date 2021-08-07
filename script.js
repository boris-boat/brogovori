let datum = document.getElementById("datum");
let datumUnesen = document.getElementById("datum-final");
let vreme = document.getElementById("vreme");
let vremeUnesen = document.getElementById("vreme-final");
let unesiBtn = document.getElementById('unesi')
let imeFinal = document.getElementById('ime-final')
let imeUneseno =document.getElementById('ime')
let uneseniPodaciBrojke = document.getElementById('uneseni-podaci-brojke')
let uneseniPodaciDebroljko = document.getElementById('uneseni-podaci-debroljko')
let uneseniPodaciBrosonja = document.getElementById('uneseni-podaci-brosonja')
let dugmeBrojke = document.getElementById('dugme-brojke')
let dugmeDebroljko = document.getElementById('dugme-debroljko')
let dugmeBrosonja = document.getElementById('dugme-brosonja')

vecUneseno()

unesiBtn.addEventListener('click', function() {
    let sviOdgovori = [imeUneseno.value,datum.value,vreme.value]
    if(imeUneseno.value != "Brojke" && imeUneseno.value != "Debroljko" && imeUneseno.value != "Brosonja") {
        alert('Ime mora biti : Brojke , Debroljko ili Brosonja')
        return
    }
    if
    (imeUneseno.value == "Brojke"){
        for(let i = 0;i<sviOdgovori.length;i++) {
        let lista = document.createElement('li')
        uneseniPodaciBrojke.appendChild(lista)
        lista.innerHTML = sviOdgovori[i]
        localStorage.setItem(i,sviOdgovori[i])
        
     }} if
     (imeUneseno.value == 'Debroljko'){
        for(let i = 0;i<sviOdgovori.length;i++) {
        let lista = document.createElement('li')
        uneseniPodaciDebroljko.appendChild(lista)
        lista.innerHTML = sviOdgovori[i]
        localStorage.setItem(i+3,sviOdgovori[i])
        
    }}if
    (imeUneseno.value == 'Brosonja'){
        for(let i = 0;i<sviOdgovori.length;i++) {
        let lista = document.createElement('li')
        uneseniPodaciBrosonja.appendChild(lista)
        lista.innerHTML = sviOdgovori[i]
        localStorage.setItem(i+6,sviOdgovori[i])
        }}
        datum.value = ''
        vreme.value = ''
        imeUneseno.value = ''
       
})
// unesi unesene datume
function vecUneseno() {
    let sviOdgovori = [imeUneseno.value,datum.value,vreme.value]
    if(localStorage.getItem('0','Brojke')) {
        for(let i = 0;i<sviOdgovori.length;i++) {
            let lista = document.createElement('li')
            uneseniPodaciBrojke.appendChild(lista)
            lista.innerHTML = localStorage.getItem(i,sviOdgovori[i])
    }}
    if(localStorage.getItem('3','Debroljko')) {
        for(let i = 0;i<sviOdgovori.length;i++) {
            let lista = document.createElement('li')
            uneseniPodaciDebroljko.appendChild(lista)
            lista.innerHTML = localStorage.getItem(i+3,sviOdgovori[i])
    }}
    if(localStorage.getItem('6','Brosonja')) {
        for(let i = 0;i<sviOdgovori.length;i++) {
            let lista = document.createElement('li')
            uneseniPodaciBrosonja.appendChild(lista)
            lista.innerHTML = localStorage.getItem(i+6,sviOdgovori[i])
    }}
}


dugmeBrojke.addEventListener('click',function() {
    localStorage.removeItem('0')
    localStorage.removeItem('1')
    localStorage.removeItem('2')
    uneseniPodaciBrojke.innerHTML = ''
})
dugmeDebroljko.addEventListener('click',function() {
    localStorage.removeItem('3')
    localStorage.removeItem('4')
    localStorage.removeItem('5')
    uneseniPodaciDebroljko.innerHTML = ''
})
dugmeBrosonja.addEventListener('click',function() {
    localStorage.removeItem('6')
    localStorage.removeItem('7')
    localStorage.removeItem('8')
    uneseniPodaciBrosonja.innerHTML = ''
})
