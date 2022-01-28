// // function add(){
        
// //     let num1 = document.getElementById("first").value;
// //     let num2 = document.getElementById("second").value;
// //     let out = parseInt(num1) + parseInt(num2);
// //     document.getElementsByClassName("output")[0].innerHTML = "Addition is <b>" + out +"</b>"
// // }

// // function sub(){
// //     let num1 = document.getElementById("first").value;
// //     let num2 = document.getElementById("second").value;
// //     let out = parseInt(num1) - parseInt(num2);
// //     document.getElementsByClassName("output")[0].innerHTML = "Subtraction is <b>" + out +"</b>"
// // }

// // function mul(){
// //     let num1 = document.getElementById("first").value;
// //     let num2 = document.getElementById("second").value;
// //     let out = parseInt(num1) * parseInt(num2);
// //     document.getElementsByClassName("output")[0].innerHTML = "Multiplication is <b>" + out +"</b>"
// // }

// // function div(){
// //     let num1 = document.getElementById("first").value;
// //     let num2 = document.getElementById("second").value;
// //     let out = parseInt(num1) / parseInt(num2);
// //     document.getElementsByClassName("output")[0].innerHTML = "Division is <b>" + out +"</b>"
// // }

// var textbox1 = document.querySelector("#first");
// textbox1.addEventListener("keyup",function(){
//    let a = textbox1.value;
//     if(isNaN(a)){
//         let spanTag = document.querySelector("#errmsg1");
//         spanTag.innerText = "only";
//         return false;
//     }  
//     // if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57))
    
//     //     let spanTag = document.querySelector("#errmsg1");
//     //    spanTag.innerText = "only";
//     //             return false;
    
// })


var firstInput =  document.querySelector("#first");
var secondInput = document.querySelector("#second");
var spantag1 =  document.querySelector("#errmsg1");
var spantag2 =  document.querySelector("#errmsg2");


firstInput.addEventListener("keyup",function(e){
    if (!((e.keyCode >=48 && e.keyCode <=57) || (e.keyCode==8)))
    spantag1.innerHTML = "Only numbers are allowed" ;
    else
    spantag1.innerHTML = "" ;
})
secondInput.addEventListener("keyup",function(e){
    if (!((e.keyCode >=48 && e.keyCode <=57) || (e.keyCode==8)))
    spantag2.innerHTML = "Only numbers are allowed" ;
    else
    spantag2.innerHTML = "" ;
})

var add =  document.querySelector("#addButton");
var sub =  document.querySelector("#subButton");
var mul =  document.querySelector("#mulButton");
var div =  document.querySelector("#divButton");
var out=  document.querySelector(".output")

add.addEventListener("click", function(){
 out.innerText = "Addition : " + (Number(firstInput.value) + Number(secondInput.value));
 document.querySelector("#first").value = "" ;
 document.querySelector("#second").value = "" ;
})

sub.addEventListener("click", function(){
    out.innerText = "Subtraction : " + (Number(firstInput.value) - Number(secondInput.value));
    document.querySelector("#first").value = "" ;
    document.querySelector("#second").value = "" ;
   })

   mul.addEventListener("click", function(){
    out.innerText = "Multiplication : " + (Number(firstInput.value) * Number(secondInput.value));
    document.querySelector("#first").value = "" ;
    document.querySelector("#second").value = "" ;
   })

   div.addEventListener("click", function(){
    out.innerText = "Division : " + (Number(firstInput.value) / Number(secondInput.value));
    document.querySelector("#first").value = "" ;
    document.querySelector("#second").value = "" ;
   })
   