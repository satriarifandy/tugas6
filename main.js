var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

function renderBarang(masukan){
    var hasil = ""
    for(var i = 0; i < masukan.length; i++){
        hasil +='<div class="card mb-4 mr-4" style="width: 20rem"> ' + 
        '<img src="img/'+masukan[i][4]+'" class="card-img-top" style="widht: 250px; height: 170px;"> ' + 
        '<div class="card-body">' +
        '<h5 class="card-title" id="itemName">'+masukan[i][1]+'</h5>' +
        '<p class="card-text" id="itemDesc">'+masukan[i][3]+'</p>' +
        '<p class="card-text">'+'Rp '+masukan[i][2]+'</p>' +
        '<a href="#" class="btn btn-primary buttontambah" id="addCart">Tambahkan ke keranjang</a>' +
        '</div>' +
        '</div>'
    }
    var tampilanbarang = document.getElementById("listBarang")
    tampilanbarang.innerHTML = hasil;
    return hasil;
}

renderBarang(items)

var searchItemElement = document.getElementById("searchItem")
var form = document.getElementById("formItem")

form.addEventListener("submit", function(e){
    e.preventDefault()

    var hasilcari = document.getElementById("keyword").value
    var filtered = []
    for(var j = 0; j < items.length; j++){
        if(items[j][1].toLocaleLowerCase().includes(hasilcari.toLocaleLowerCase())){
          filtered.push(items[j])  
        }
    }
    renderBarang(filtered)
})

var keranjang = document.getElementById('cart')
var bagianA = document.getElementsByClassName('btn btn-primary buttontambah')
var jumlahcart = 0;

for(j = 0; j < items.length; j++){
    bagianA[j].addEventListener('click', function(){
        jumlahcart += 1
        keranjang.innerHTML = ' <i class="fas fa-shopping-cart"></i>(' + jumlahcart + ')'
    })
}

