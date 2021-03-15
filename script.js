/* 
    1 : if the backtotopbtn  clicked scroll to top
    2 :check if window scroll,run the function 
    3 : if window.scrollY less than one hundred dont show backtotopbtn
*/
// 1
const backtotopbtn = document.querySelector('#backtotop-btn');
backtotopbtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
// 2
window.addEventListener('scroll',()=>{
    // 3
    if(window.scrollY < 100){
        backtotopbtn.style.opacity = '0';
    }else{
        backtotopbtn.style.opacity = '1';
        backtotopbtn.style.pointerEvents = 'all';
    }
})
