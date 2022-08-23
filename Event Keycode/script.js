const insert = document.getElementById('insert');


window.addEventListener('keydown',(e)=>{
    insert.innerHTML =`
    <div class="key">
        ${e.key===' ' ? 'Space' : e.key}
        <div class="small">event.key</div>
    </div>
    <div class="key">
        ${e.keyCode}
        <div class="small">event.keyCode</div>
    </div>
    <div class="key">
        ${e.code}
        <div class="small">event.code</div>
    </div>
    `
})