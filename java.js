

//Merchindise 
var merch_prices = new Array();
 merch_prices["3pack"]=3; //Variabels that represents the value of a pack of stickers 
 merch_prices["5pack"]=4;
 merch_prices["10pack"]=5;
 merch_prices["20pack"]=7;

//Sticker 1
function getmerchStickerPrice() {//This function finds the price of the choosen sticker pack
    var merchStickerPrice=0; // start of the value of 0 
    var theForm = document.forms["merchform"];
    var stickeramount = theForm.elements["stickeramount"];
    for(var i = 0; i < stickeramount.length; i++) //We loop through each radio buttons
    {
        if(stickeramount[i].checked) //if the radio button is checked
        {
            merchStickerPrice = merch_prices[stickeramount[i].value];
        }
    }
    return merchStickerPrice; //the price is retuned 
}

//Sticker 2 
function getmerchSticker2Price(){  
    var merchSticker2Price=0;
    var theForm = document.forms["merchform"];
    var sticker2amount = theForm.elements["sticker2amount"];
    for(var i = 0; i < sticker2amount.length; i++)
    {
        if(sticker2amount[i].checked)
        {
            merchSticker2Price = merch_prices[sticker2amount[i].value];
            
        }
    }
    return merchSticker2Price;
}

//Sticker 3 
function getmerchSticker3Price(){  
    var merchSticker3Price=0;
    var theForm = document.forms["merchform"];
    var sticker3amount = theForm.elements["sticker3amount"];
    for(var i = 0; i < sticker3amount.length; i++)
    {
        if(sticker3amount[i].checked)
        {
            merchSticker3Price = merch_prices[sticker3amount[i].value];
           
        }
    }
    return merchSticker3Price;
}

//Sticker 4 
function getmerchSticker4Price(){  
    var merchSticker4Price=0;
    var theForm = document.forms["merchform"];
    var sticker4amount = theForm.elements["sticker4amount"];
    for(var i = 0; i < sticker4amount.length; i++)
    {
        if(sticker4amount[i].checked)
        {
            merchSticker4Price = merch_prices[sticker4amount[i].value];
            
        }
    }
    return merchSticker4Price;
}

//Wrapping
function wrappingPrice(){ //wrappingPrice() adds the price of wrapping if checkbox is selected
    var wrapPrice=0; //the price starts at 0
    var theForm = document.forms["merchform"];
    var includewrapping = theForm.elements["includewrapping"];
	
    if(includewrapping.checked==true)//If the check box is checked  it will set it to 3
        wrapPrice=3;
    return wrapPrice;//The wrapPrice is returnt
}

//Calculate       
function calculateTotal(){// Here the price is caculatet based on previus choices 
    var merchPrice = getmerchStickerPrice() + getmerchSticker2Price() + getmerchSticker3Price() + getmerchSticker4Price() + wrappingPrice(); // The price of the first sticker+sticker2+sticker3+sticker4 and wrapping ia added together 
    var priceresult = document.getElementById('totalPrice'); //display the result
    priceresult.style.display='block';
    priceresult.innerHTML = "Total Price $"+merchPrice; //price shown in the HTML file 

}

//Hiddin on loade of HTML
function hideTotal(){ //price is hidden upon lode of the page, the tag is found the the body tag of the HTML file
    var priceresult = document.getElementById('totalPrice');//this is what is hidden until its called upon
    priceresult.style.display='none'; 

}
