const btn = document.querySelector('.j-btn-test');
var result= document.querySelector('.btn_icon');

const first=`<div class="btn_icon">
                <svg width="16" height="16" fill="currentColor" class="arrow-down" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
                </svg>
             </div>`;

const second=`<div class="btn_icon">
                <svg width="16" height="16" fill="currentColor" class="bi-arrow-down-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"/>
                </svg>
              </div>`;

var a=1

btn.addEventListener('click', () => {
    console.log(a)
    a=a+1
    if(a%2==1){
        result.innerHTML=first
    }else{
        result.innerHTML=second
    }

});