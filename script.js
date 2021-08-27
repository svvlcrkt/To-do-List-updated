let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');

// function add to element on button click

btn.addEventListener('click',() => {  //kullanıcı dokümanda herhangi bir yere tıkladığında çıktısı fonksiyon içerisinde olanlardır.//
    let txt = input.value;  //kullanıcının girdiği metni txt değişkeninde tuttuk
    if(txt === "" ){  //eğer txt boş ise 
        alert('you must write something');  //ekrana hata verilmesini sağladık
    }
    else{  //yazılan metin boş değilse 
        let li = document.createElement('li'); //dokümanda bir li elementi oluşturduk ve bunu li değişkeninde tuttuk
        li.innerHTML = txt; //inputta yazılan değeri (txt), li değişkeni içerisine yazdık
        list.insertBefore(li,list.childNodes[0]);  //li değişkenini list değişkeninin ilk öğesi olarak ekler
        input.value='';  //input değerini 0 layarak kullanıcıya her seferinde metin kutusu kısmı temiz şekilde sunulur
    
        var span = document.createElement("SPAN");  //span elementi oluşturduk
        var text = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(text);
        li.appendChild(span);

       
    
    
    }

})
 for (i = 0; i < close.length; i++) {
            close[i].onclick = function() { //close tıklandığında eşitlendiği fonksiyondaki işlemlerin yapılmasını sağlar.
              var div = this.parentElement; 
              div.style.display = "none";  //silinen elementin gözükmemesini sağlar
            }
          }
    



//eğer enter tuşu ile de yazılan metnin listeye eklenmesini istersek kullanabiliriz
input.addEventListener("keyup", function(event) {  
    if (event.keyCode === 13) {  //enter'ın keycode'u 13 dür
        event.preventDefault();  //eğer gerekliyse default olan olayı siler.
        document.getElementById("btn").click(); //dokümanda id'si btn olan elemana gider ve onu clickler yani aslında enter tuşunu button öğesine bağladık.
    }
});

//allows us to mark the done subj.

list.addEventListener('click',e =>{
    //console.log(e);  
    //.target: gönderilen nesneye bir başvurudur.

    if(e.target.tagName == 'LI'){   //toggle yerine if-else de kullanabiliriz
        console.log(e.target.classList); 
        if(e.target.classList.value == ""){
            e.target.classList.add("checked");
        }
        else{
            e.target.classList.remove("checked");
        }


        // e.target.classList.toggle('checked');  
    }


//checked ise üzeri çizilmemiştir,değil ise çizilmiştir

})
//burada silme tuşunu oluşturduk
//şimdi her li elementi yanına bir kapatma tuşu koyalım:
var myNodelist = document.getElementsByTagName("LI"); //öncelikle li taglerini alıyoruz. 
for (var i = 0; i < myNodelist.length; i++) {  //li sayısı kadar öğeye atama yapmamız gerektiği için length'i aldık
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7"); //çarpı işaretidir
  span.className = "close";
  span.appendChild(txt);  //span'in en son öğesine txt'yi ekler.
  //span.innerText = txt;  //bunu neden kullanmadık???
  myNodelist[i].appendChild(span); //appendChild ile öğenin yeni yeri belirlenmiş olur.
  // burada myNodelist array'inin i. öğesine span'i yerleştirdik
}

// burada silme tuşunu çalıştırdık
var close = document.getElementsByClassName("close");  //span öğeleri
for (var i = 0; i < close.length; i++) { //eleman sayısı kadar dönecek olan for döngüsü
  close[i].onclick = function() {  //her öğe tıklandığında function çalışacak
    var div = this.parentElement;  //dıştaki div parentElement'imiz olur
    div.style.display = "none"; //bu sayede silinen öğenin gözükmemesi sağlanır
  }
}
