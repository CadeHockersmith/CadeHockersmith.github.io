function newImage(){
            x = Math.round(Math.random() * 15 + 1);
            document.getElementById("quoteImg").src = "img/quotes/"+ x + ".png"
    
            x = Math.round(Math.random() * 4 + 1);
            document.getElementById("elly").src = "img/ellys/"+ x + ".png"
            }
