/*       
---> ÖDEV-1
y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?
                        ÖDEV-1 CEVAP

x = Number(prompt("X değeri: "));
document.writeln(x + "<br>");
k = Number(prompt("K değeri: "));
document.writeln(k + "<br>");

function formula(x,k){
    var y = 3*x + 4*k;
 document.writeln("Formül Sonucu: " + y);
}

formula(x,k);


---> ÖDEV-2 Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
             ÖDEV-2 CEVAP

var celcius = Number(prompt("Celcius derecesi girin: "));
document.writeln("Celcius derecesi: " + celcius + "<br>");

function convertToFahrenheit(celcius){
  var fahrenheit = (celcius*9/5) + 32;
  document.writeln("Fahrenheit derecesi: " + fahrenheit);
}

convertToFahrenheit(celcius);


---> ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?
                  ÖDEV-3 CEVAP

var number = Number(prompt("Bir sayı girin: "));
document.writeln("Sayı: " + number+ "<br>");

function detectNumber(number){
  if(number > 0){
    document.writeln("Sayı pozitif."+ "<br>");
  } 
  else if(number < 0){
    document.writeln("Sayı negatif."+ "<br>");
  }
  else
    document.writeln("Sayı değeri 0."+ "<br>")
  
}

detectNumber(number);


---> ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?
                   ÖDEV-4 CEVAP

function isValid(){
    var password = document.getElementById('password').value;
        if (password == "rawr")
                {alert('Correct!')}
         else
           {alert('Wrong Password')}
}

--> ÖDEV-5 Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function
    algoritmasını yazalım switch-case   new Date().getDay() 0=pazar 1=pazartesi
                  ÖDEV-5 CEVAP                                                        
    
    let day = String;
    timeShow = (day) => {
        switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
        }
      document.writeln(day);
}
timeShow(day); 

---> ÖDEV-6 Login userEmail,userPassword kullanıcıdan aldığımız değeri db
 ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek 4 kalan 
 haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
          dbUserEmail="deneme@gmail.com"
          dbUserPassword="root"
              ÖDEV-6 CEVAP         

    let dbObject={
        "dbUserEmail" : "deneme@gmail.com",
        "dbPassword" : "root"
    }
    var attempt = 4; 
  
    function adminFunction(){
        var email = document.getElementById("exampleInputEmail1").value;
        var password = document.getElementById("exampleInputPassword1").value;
     
        if(email=="" || password==""){
            alert ("Please complete the required field!");
        }
        else{
            if (email == dbObject.dbUserEmail && password == dbObject.dbPassword){
                alert ("Login successfully");
                }
            else{
                limitWrongInput();

            }
            }
        }
    
    function limitWrongInput(){
         attempt--;
         alert("You have left "+attempt+" login attempt.");
            if(attempt == 0){
                document.getElementById("exampleInputEmail1").disabled=true;
			    document.getElementById("exampleInputPassword1").disabled=true;
				document.getElementById("login").disabled=true;
                    return false;
                        } 
                }

ÖDEV-7 Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Immedia function
 algoritmasını yazalım switch-case   new Date().getDay()
                ÖDEV-7 CEVAP                        

                let day = String;
                (function timeShow (day){
                    switch (new Date().getDay()) {
                        case 0:
                            day = "Sunday";
                            break;
                        case 1:
                            day = "Monday";
                            break;
                        case 2:
                            day = "Tuesday";
                            break;
                        case 3:
                            day = "Wednesday";
                            break;
                        case 4:
                            day = "Thursday";
                            break;
                        case 5:
                            day = "Friday";
                            break;
                        case 6:
                            day = "Saturday";
                        }
                      document.writeln(day);
                })();
                
ÖDEV-8 Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Arrow function algoritmasını yazalım switch-case   new Date().getDay()
    let deneme= ()=>{ }
                ÖDEV-8 CEVAP        
        
        let day = String;
        let timeShow = (day) =>{
            switch (new Date().getDay()) {
                case 0:
                    day = "Sunday";
                    break;
                case 1:
                    day = "Monday";
                    break;
                case 2:
                    day = "Tuesday";
                    break;
                case 3:
                    day = "Wednesday";
                    break;
                case 4:
                    day = "Thursday";
                    break;
                case 5:
                    day = "Friday";
                    break;
                case 6:
                    day = "Saturday";
                }
              document.writeln(day);
        }
        timeShow(day);

ÖDEV-9 Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Anonymous function
     algoritmasını yazalım switch-case   new Date().getDay()
     let deneme= function (){ }
                        ÖDEV-9 CEVAP   
    
        let timeShow = function(day){
        switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
            }
          document.writeln(day);
    }
timeShow();

ÖDEV-10 Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye 
çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan 
küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?
                     ÖDEV-10 CEVAP           
    
        function getRandomInt(min, max) {
             min = Math.ceil(min);
             max = Math.floor(max);
              return Math.floor(Math.random() * (max - min) + min); 
                  }

       randomNumber = (getRandomInt(1,11));
       console.log(randomNumber);
       guessNumber = 5;

       if(guessNumber > randomNumber){
           document.writeln("sayıdan büyük değer girdiniz.");
       }
       else if(guessNumber < randomNumber){
           document.writeln("sayıdan küçük sayı girdiniz.");
       }
       else {
           document.writeln("sayıyı buldunuz.")
       }
    
     */               