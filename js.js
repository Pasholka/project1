// document.querySelector('.btn1').onclick = function () {
//   alert('1')
// }

// task2

// document.querySelector('.b-2').onclick = function () {
//   alert('2')
// }

//task3

// document.querySelector('.p-3').onclick = function () {
//   alert('task3');
// }

//task4

// document.querySelector('.b-4').onclick = function () {
//   // let chek = document.querySelector('.i-4');
//   let out = document.querySelector('.out-4');
//   if (document.querySelector('.i-4').checked) {
//     out.innerHTML = 'true';
//   }
//   else {
//      out.innerHTML = 'false';
//   }
// }

//task5

// document.querySelector('.b-5').onclick = function () {
//   let check = document.querySelector('#i-5');
//   let out = document.querySelector('.out');
//   if (check.checked){
//     out.innerHTML = check.value;
//   }else{
//     out.innerHTML = 'false'
//   }
// }

//task6

// document.querySelector('.b-6').onclick = function () {
//   let hidden = document.querySelector('.i-6');
//   let out = document.querySelector('.out');
//   out.innerHTML = hidden.value;
// }

//task7

// document.querySelector('.b-7').onclick = function () {
//   document.querySelector('.out-71').innerHTML = document.querySelector('.i-7').value;
//   let task7 = document.querySelector('.i-7');
//   console.log(task7.value.length);
//   if (task7.value.length >= 6) {
//     document.querySelector('.out-72').innerHTML = '1';
//   }else {
//     document.querySelector('.out-72').innerHTML = '0';
//   }
// }

//task-8

// document.querySelector('.b-8').onclick = function () {

// }

// let btn = document.querySelector('.b-8');
// let out = document.querySelector('.out-8');

// btn.onclick = function () {
//   out.innerHTML += '<input type="password" class="i-81"></input>';
//   out.innerHTML += '<button class="b-81">B-81</button>';
//   document.querySelector('.b-81').onclick = function () {
//     let input81 = document.querySelector('.i-81');
//     out.innerHTML = input81.value;
//   }
// }

//task9

// document.querySelector('.b-9').onclick = function () {
//   let out = document.querySelector('.out');
//   let r = document.querySelector('.r-9');
//   if (r.checked) {
//     out.innerHTML = r.value;
//   }else {
//     out.innerHTML = "0";
//   }
// }

//task10

// document.querySelector('.b-10').onclick = function () {
//   let input = document.querySelector('.i-10');
//   console.log(input.value);
//   document.querySelector('.out').style.background = input.value;
// }


//task11
// document.querySelector('.b-11').onclick = function () {
//   let input1 = document.querySelector('.i-111');
//   let input2 = document.querySelector('.i-112');
//   console.log(input1.value);
//   input2.value = input1.value;
// }

//task12

// document.querySelector('.b-12').onclick = function () {
//   document.querySelector('.out').innerHTML = document.querySelector('.i-12').value;
// }

//task13

// document.querySelector('.i-13').oninput = function () {
// document.querySelector('.out').innerHTML = document.querySelector('.i-13').value + '%';
// }

// task14

// document.querySelector('.b-14').onclick = function () {
//   document.querySelector('.out').innerHTML = document.querySelector('.t-14').value;
// }

//task15

// document.querySelector('.b-15').onclick = function () {
//   document.querySelector('.t-15').innerHTML = document.querySelector('.i-15').value;
//   document.querySelector('.out').innerHTML = document.querySelector('.i-15').value;

// }

//task16

// document.querySelector('.b-16').onclick = function () {
//   document.querySelector('.out').innerHTML = document.querySelector('.s-16').value;
// }

//task17

// function my() {
//   document.querySelector('.out').innerHTML = document.querySelector('.s-17').value;
// }

//task18

// function my() {
//   document.querySelector('.i-18').value = document.querySelector('.s-18').value;
//   console.log(document.querySelector('.s-18').value);
// }

//task19

// document.querySelector('.b-19').onclick = function () {
//   document.querySelector('.out').innerHTML = document.querySelector('.i-191').value + " " + document.querySelector('.i-192').value;
  
// }


// document.querySelector('.b-20').onclick = function (event) {
//   event.preventDefault();
//   let form = document.querySelector('form');
//   document.querySelector('.out').innerHTML = document.querySelector('.i-200').value + " " + document.querySelector('#id1').value;
//   console.log(form.elements.id1.value);
  
// }

// task1

// document.querySelector('.b-1').onclick = function () {
//   for (let i = 0; i <= 50; i++){
//     document.querySelector('.out').innerHTML += i + ' ';
//   }
// }

//task2
// document.querySelector('.b-2').onclick = function () {
//   for (let i = 2; i <= 122; i= i + 2) {
//     document.querySelector('.out').innerHTML += i + ' ';
//   }
// }

//task3
// document.querySelector('.b-3').onclick = function () {
//   for (let i = 25; i >= 7; i--) {
//     document.querySelector('.out').innerHTML += i + ' ';
//   }
// }
//task4
// document.querySelector('.b-4').onclick = function () {
//   for (let i = 77; i >= 35; i= i - 3) {
//     document.querySelector('.out').innerHTML += i + '_';
//   }
// }
//task5
// document.querySelector('.b-5').onclick = function () {
//   for (let i = 1; i <= 17; i++){
//     if (i % 2) {
//       document.querySelector('.out').innerHTML += i + '_*';
//     }else {
//       document.querySelector('.out').innerHTML += i + '_**';
//     }
//   }
// }
//task6
// document.querySelector('.b-6').onclick = function () {
//   let input = document.querySelector('.i-6');
//   for (let i = 0; i < input.value; i++) {
//     document.querySelector('.out').innerHTML += '<div class="out">******</div>';
//   }
//   console.log(input.value);
// }
//task7
// document.querySelector('.b-7').onclick = function () {
//   let input = document.querySelector('.i-7');
//   for (let i = input.value; i >= 0; i--) {
//     document.querySelector('.out').innerHTML += i +' ';
//   }
// }

//task8
// document.querySelector('.b-8').onclick = function () {
//   let i1 = document.querySelector('.i-81');
//   let i2 = document.querySelector('.i-82');
//   for (let i = i1.value; i <= i2.value; i++){
//     document.querySelector('.out').innerHTML += i +' ';
//   }

// }
//task9 
// document.querySelector('.b-9').onclick = function () {
//   let i91 = document.querySelector('.i-91');
//   let i92 = document.querySelector('.i-92');
//   console.log(i91.value)
//   console.log(i92.value)
//   if (i91.value > i92.value){
//     for (let i = i92.value; i <= i91.value; i++){
//       document.querySelector('.out').innerHTML += i +' ';
//     }
//   }else{
//     for (let i = i91.value; i <= i92.value; i++){
//       document.querySelector('.out').innerHTML += i +' ';
//     }
//   }
// }


//task10
// document.querySelector('.b-10').onclick = function () {
//   for (let i = 1950; i <= 2000; i++) {
//     if (i % 2){
    
//   }
//   else{
//     document.querySelector('.out').innerHTML += i + ' ';
//     }
//   }
// }
//task11
// function t11 () {
//   let d = document.querySelectorAll('.div');
//   console.log(d);
//   for (let i = 0; i < d.length; i++){
//     document.querySelector('.out').innerHTML = document.querySelector('.out').textContent +  ' ' + d + ' ';
//     console.log(d[i]);
//   }
// }
// document.querySelector('.b-11').onclick = t11;

//task12

// document.querySelector('.b-12').onclick = t12;

// function t12 () {
//   let orange = document.querySelectorAll('.div');
//   for (let i = 0; i < orange.length; i++) {
//     orange[i].style.background = 'orange';
//   }
// }

//task13
// document.querySelector('.b-13').onclick = function() {;
//   let inp = document.querySelectorAll('.i-131');
//   for(let i = 0; i < inp.length; i++) {
//     inp[i].value = i + 1;
    
//   }
// }

//task14
// document.querySelector('.b-14').onclick = function () {;
//   let input = document.querySelectorAll('.i-14');
//   for (let i = 0; i < input.length; i++) {
//     if (input[i].checked){
//      document.querySelector('.out').innerHTML += input[i].value + '  ';
//     }
//   }
// }
//task1

  // for (let i = 0; i < 3; i++){
  //   for (let k = 0; k <3; k++){
  //     document.querySelector('.out').innerHTML += "*";
  //   }
  //   document.querySelector('.out').innerHTML += "_";
  // }
//task2

// for (let i = 0; i < 3; i++){
//     document.querySelector('.out').innerHTML += "<br>1 <br>";
//   for (let k = 0; k < 3; k++) {
//     document.querySelector('.out').innerHTML += "*_ "
//   }
// }
//task3
// for (i = 0; i < 4; i++) {
//   for (k = 0; k < 3; k++) {
//     document.querySelector('.out').innerHTML += "*_"
//   }document.querySelector('.out').innerHTML += "<br>"
// }
//task4
// for( let i = 1; i <= 3; i++) {
//   document.querySelector('.out').innerHTML += i + '_';
//   for (k = 1; k <= 5; k++) {
//     document.querySelector('.out').innerHTML += k + ' ';
//   }
// }
//task5
// for ( let i = 1; i <= 3; i++){
//   for (let k = 0; k < 6; k++){
//     if(k % 2){
//       document.querySelector('.out').innerHTML += '0';
//     }else{
//       document.querySelector('.out').innerHTML += '1';
//     }
//   }document.querySelector('.out').innerHTML += '<br>';
// }
//task6
// for ( let i = 1; i <= 3; i++){
//   for (let k = 0; k <= 6; k++){
//     // if(k % 2){
//     //   document.querySelector('.out').innerHTML += '0';
//     // }else if(k % 3) {
//     //   document.querySelector('.out').innerHTML += 'x';
//     // }else{
//     //   document.querySelector('.out').innerHTML += '1';
//     // }
//     switch (k){
//       case 1:
//         document.querySelector('.out').innerHTML += '1';
//         break;
//       case 2:
//         document.querySelector('.out').innerHTML += '0';
//         break;
//       case 3:
//         document.querySelector('.out').innerHTML += 'x';
//         break;
//       case 4:
//         document.querySelector('.out').innerHTML += '0';
//         break;
//       case 5:
//         document.querySelector('.out').innerHTML += '1';
//         break;
//       case 6:
//         document.querySelector('.out').innerHTML += 'x';
//         break;
//     }
//   }document.querySelector('.out').innerHTML += '<br>';
// }
//task7
// for (let i = 1; i <= 1; i++){
//   for (let k = 1; k <= i; k++) {
//     switch (k) {
//       case 1:
//       document.querySelector('.out').innerHTML += '*****'+ "<br>";
//       case 2:
//       document.querySelector('.out').innerHTML += '****' + "<br>";
//       // break;
//       case 3:
//       document.querySelector('.out').innerHTML += '***'+ "<br>";
//       // break;
//       case 4:
//       document.querySelector('.out').innerHTML += '**'+ "<br>";
//       // break;
//       case 5:
//       document.querySelector('.out').innerHTML += '*'+ "<br>";
//       // break;
    // }
    // if (k < 2){
    //   document.querySelector('.out').innerHTML += '*';
    //   break;
    // } else if (k < 3){
    //   document.querySelector('.out').innerHTML += '**';
    //   break;
    // } else if (k < 4){
    //   document.querySelector('.out').innerHTML += '***';
    //   break;
    // } else {
    //   document.querySelector('.out').innerHTML += '****';
    // }
//   }document.querySelector('.out').innerHTML += '<br>';
// }


//task9
// for (let i = 0; i <= 5; i++) {
//   for (let k = 0; k <= i; k++) {
//     // document.querySelector('.out').innerHTML += k;
//     switch (k) {
//       case 1:
//         document.querySelector('.out').innerHTML += k + ' '; 
//         break;
//       case 2:
//         document.querySelector('.out').innerHTML += k + ' ';
//         break;
//       case 3:
//         document.querySelector('.out').innerHTML += k + ' ';
//         break;
//       case 4:
//         document.querySelector('.out').innerHTML += k + ' ';
//         break;
//       case 5:
//         document.querySelector('.out').innerHTML += k + ' ';
//         break;
//     }
// }
// document.querySelector('.out').innerHTML += '<br>';
// }


//task9 ???????
// for (let i = 0; i <= 10; i++) {
//   for (let k = 1; k <=i; k++) {
//     document.querySelector('.out').innerHTML += k;
//   }document.querySelector('.out').innerHTML += '<br>';
// }

// task10
// let output = 0;
// for (var i = 0; i < 6; i++) {
//   for (let k = 0; k < 10; k++) {
//     console.log(i);
//     document.querySelector('.out').innerHTML += document.toString(i) + k + ' ';
    
//   }
//   document.querySelector('.out').innerHTML += '<br>';
// }

//task11

// for (let i = 1; i <= 10; i++){
//   for (let k = 1; k <= 10; k++){
//     document.querySelector('.out').innerHTML += `${i}*${k} = ${i * k} <br>`
//   }document.querySelector('.out').innerHTML += '<hr>'
// }

//task12

// for (let i = 0; i < 3; i++){
//   for (let k = 0; k < 5; k++){
//     document.querySelector('.out').innerHTML += "*";
//   }document.querySelector('.out').innerHTML += '<br>';
// }

// //task13

// for (let i = 0; i <= 5; i++){
//   for (let k = 0; k < i; k++){
//     document.querySelector('.out').innerHTML += "*";
//   }document.querySelector('.out').innerHTML += '<br>';
// }
//task14

// for (let i = 6; i >= 1; i--){
//   for (let k = 1; k < i; k++){
//     document.querySelector('.out').innerHTML += "*";
//   }document.querySelector('.out').innerHTML += '<br>';
// }

//task15

// for (let i = 3; i > 0; i--){
//   for(let d = 0; d<i; d++){
//     document.querySelector('.out').innerHTML += '&nbsp;';
// }
//   for (let k = 0; k < 5; k++){
//     document.querySelector('.out').innerHTML += "*";
//   }
//  document.querySelector('.out').innerHTML += '<br>';
// }

//work7task1
// let a1 = 8;
// function t1 () {
// document.querySelector('.out').innerHTML = a1;
// }
// document.querySelector('.b-1').onclick = t1;

//work7task2
// let a2 = 8;
// function t2() {
//   return a2;
// }
// document.querySelector('.b-1').onclick = function() {
//     document.querySelector('.out').textContent = t2();
// }

//work7task3
// function t3(a,b) {
//   return a*b;
// }
// document.querySelector('.b-11').onclick =function() {
//     document.querySelector('.out').textContent = t3(3,4);
// }
// document.querySelector('.b-12').onclick = function(){
//     document.querySelector('.out1').textContent = t3(5,6);
// }
//work7task4
// let input = document.querySelector('.i-4');
// function t4 (a,b) {
//   return a-b;
// }
// document.querySelector('.b-4').onclick = function () {
//   document.querySelector('.out').textContent = t4(2022,input.value);
// }
//------------------------------------------------------------------------------------------------------------
// let input = document.querySelector('.i-4');
// function t4 () {
//   return 2022-input.value;
// }
// document.querySelector('.b-4').onclick = function () {
//   document.querySelector('.out').textContent = t4();
// }
//work7task5
// let namee = document.querySelector('.i-5');
// function t5 () {
//   console.log(namee.value);
//   return 'Hello' + ' ' + namee.value;
  
// }
// document.querySelector('.b-5').onclick = function () {
//   document.querySelector('.out').textContent = t5();
// }

//work7task6

// let i61 = document.querySelector('.i-61');
// let i62 = document.querySelector('.i-62');
// function t6 (a,b) {
//   console.log(i61.value,i62.value);
//   return (Math.floor(Math.random() * b) + a);
// }
// document.querySelector('.b-6').onclick = function () {
//   document.querySelector('.out').textContent = t6(+i61.value,+i62.value);
// }
//work7task7
  // function t7 () {
  //   console.log();
  //   return `rgb(${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)})`;
  // }
  // document.querySelector('.b-7').onclick = function () {
  //   document.querySelector('.out').textContent = t7();
  //     document.querySelector('.b-7').style.background = t7();
  // }
  //work7task8
  // let i8 = document.querySelector('.i-8');
  // function t8 () {
  //   console.log(i8.value);
  //   return (i8.value).trim();
  // }
  // document.querySelector('.b-8').onclick = function () {
  //   document.querySelector('.out').textContent = t8();
  //   i8.value = " ";
  // }
  // work7task9
  // function t9 () {
  //   let i9 = document.querySelector('.i-9');
  //   console.log(i9.value);
  //    if (i9.value % 2) {
  //      return 'false';
  //    } else {
  //      return 'try'
  //    }
  // }
  // document.querySelector('.b-9').onclick = function () {
  //   document.querySelector('.out').textContent = t9();
  // }

  // work7task10
  // function t10 () {
  //   let i1 = document.querySelector('.i-100');
  //   let i2 = document.querySelector('.i-101');
  //     console.log(i1.value,i2.value);
  //     if (i1.value < i2.value){
  //       return i2.value;
  //     } else if (i2.value < i1.value) {
  //       return i1.value;
  //     }else {
  //       return i1.value;
  //     }
  // }
  // document.querySelector('.b-10').onclick = function () {
  //   document.querySelector('.out').textContent = t10();
  // }
  //work8task1
  // let sum = 0;
  // let p = 0;
  // while (p <= 10) {
  //   sum = sum + p;
  //   p++
  // }
  // console.log(sum);

  // let out = document.querySelector('.out');
  // let p = 0;
  // let outStr = ' ';
  // let p1 = 3;
  // while (p < 4) {
  //   let k = 0;
  //   while (k < 4){ 
  //     if (k < p1){
  //       outStr += '&nbsp';
  //     }else {
  //       outStr += '*';
  //     }
  //     k++;
  //   }
  //   p1--;
  //   outStr += "<br>";
  //   p++;
  // }
  // out.innerHTML = outStr;

  // let out = document.querySelector('.out');
  // let p = 0;
  // let outStr = '';
  // function t1 () {
  //   while (p <= 50) {
  //     // console.log(p);
  //     outStr += p + ' ';
  //     p++;
  //   }
  //   out.innerHTML += outStr;
  // }
  // document.querySelector('.b-1').onclick = function () {
  //   out.innerHTML += t1 ();
  // }
  // function t1 (){
  //     let out = document.querySelector('.out');
  //   let p = 0;
  //   let outStr = '';
  //   while (p <= 50){
  //     outStr += p + ' ';
  //     p++;
  //   }out.innerHTML += outStr;
  //  }
  //   document.querySelector('.b-1').onclick = function () {
  //     t1();
  // }



   //work8task2



  // function t2 () {
  //   let out = document.querySelector('.out');
  //   let p = 2;
  //   while ( p <= 122){
  //     out.innerHTML += p + " ";
  //     p = p + 2;
  //   } 
  // } 
  //   document.querySelector('.b-2').onclick = function () {
  //     t2();
  // }


   //work8task3


  // function t2 () {
  //   let out = document.querySelector('.out');
  //   let p = 25;
  //   while ( p >= 7){
  //     out.innerHTML += p + " ";
  //     p--;
  //   } 
  // } 
  //   document.querySelector('.b-2').onclick = function () {
  //     t2();
  // }

  //work8task4

  // function t2 () {
  //   let out = document.querySelector('.out');
  //   let p = 77;
  //   while ( p >= 35){
  //     out.innerHTML += p + "_";
  //     p = p - 3;
  //   } 
  // } 
  //   document.querySelector('.b-2').onclick = function () {
  //     t2();
  // }

  //work8task5

  // function t5 () {
  //   let out = document.querySelector('.out');
  //   let p = 1;
  //   while (p <= 17){
  //     if (p % 2){
  //       out.innerHTML += p + '_*';
  //     }else {
  //       out.innerHTML += p + '_**';
  //     }
      
  //     p++;}
  // }
  // document.querySelector('.b-5').onclick = function () {
  //   t5();
  // }

  //work8task6

  // function t6 () {
  //   let out = document.querySelector('.out');
  //   let i = document.querySelector('.i-6');
  //   let p = 0;
  //     while (p < i.value) {
  //       out.innerHTML +=  '******' + '<br>';
  //       p++;
  //     }
  // }
  // document.querySelector('.b-6').onclick = function () {
  //   t6 ();
    
  // }

  //work8task7

  // function t6 () {
  //   let out = document.querySelector('.out');
  //   let i = document.querySelector('.i-6');
  //   let p = i.value;
  //     while (p >= 0) {
  //       out.innerHTML +=  p+ ' ';
  //       p--;
  //     }
  // }
  // document.querySelector('.b-6').onclick = function () {
  //   t6 ();
  // }


  //work8task8

  // function t8 () {
  //   let out = document.querySelector('.out');
  //   let inp81 = document.querySelector('.i-81');
  //   let inp82 = document.querySelector('.i-82');
  //   let p = inp81.value;
  //   while (p <= inp82.value){
  //     out.innerHTML += p + ' ';
  //     p++;
  //   }
  // }
  // document.querySelector('.b-8').onclick = function (){
  //   t8();
  // }


  //work8task9

  // function t8 () {
  //   let out = document.querySelector('.out');
  //   let inp81 = document.querySelector('.i-81');
  //   let inp82 = document.querySelector('.i-82');
  //   let p = inp81.value;
  //   let k = inp82.value;
  //   if (p <= k) {
  //     while (p <= k) {
  //       out.innerHTML += p + ' ';
  //       p++;
  //     }
  //   }else {
  //     while (p >= k) {
  //       out.innerHTML += k + ' ';
  //       k++;
  //     }
  //   }
  // }
  // document.querySelector('.b-8').onclick = function (){
  //   t8();
  // }

  // work8task10

  // function t10 () {
  //   let out = document.querySelector('.out');
  //   let p = 1950;
  //   while (p <= 2000) {
  //     out.innerHTML += p + ' ';
  //     p = p + 2;
  //   }
  // }
  // document.querySelector('.b-10').onclick = function () {
  //   t10 ();
  // }

  // work8task11
  
  // document.querySelector('.b-11').onclick = function () {
  //   let out = document.querySelector('.out');
  //   let d = document.querySelectorAll('.div11');
  //   let p = 0;
  //   console.log(d);
  //   while (p < d.length){
  //    out.textContent += d[p].textContent + ' ';
  //     p++;
  //   } 
  // }


   // work8task12
  // function t12 () {
  //   let div = document.querySelectorAll('.div11');
  //   let i = 0;
  //   let to = `rgb(${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)})`;;
  //   while (i < div.length){
  //     div[i].style.background = to;
  //     i++
  //   }
  //   document.querySelector('.out').innerHTML += to + '<br>';
  
  // }
  // document.querySelector('.b-11').onclick = function () {
  //   t12();
  // }


   // work8task13

  //  function t13 () {
  //    let inp = document.querySelectorAll('.i13');
  //    let p = 0;
  //    while (p < inp.length){
  //      console.log(inp[p]);
  //      inp[p].value = p + 1;
  //      p++;
  //    }
  //  }
  //  document.querySelector('.b-13').onclick = function () {
  //    t13 ();
  //  }

  //work8task14
  // function t14 () {
  //   let inp = document.querySelectorAll('.i14');
  //   let i = 0;
  //   while (i < inp.length){
  //     console.log(inp[i]);
  //     if (inp[i].checked) {
  //       document.querySelector('.out').textContent += (inp[i]).value;
  //     }
  //     i++;
  //   }
  // }
  // document.querySelector('.b-14').onclick = function () {
  //   t14 ();
  // }



  let button = document.querySelector('.container_button').onclick = function () {
    let main = document.querySelector('.main');
    let text = document.querySelector('.container_tag_text');
    let text_btn = document.querySelector('.container_button');
    let btn = document.querySelector('.container_batton_text');
    let container_color = document.querySelector('.container_color');
    let color = `rgb(${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)})`;
    let c = [text, text_btn, container_color, btn];
    for (let item of c){
       item.style.color= color;
    }
    
    
    main.style.background= `rgb(${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)})`;
    text_btn.style.background= `rgb(${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)},${(Math.floor(Math.random() * 256) + 0)})`;
    container_color.textContent = 'колір : ' + color;
  }
  