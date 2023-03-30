var form=document.getElementById('frm');
var ntitle=document.getElementById('title');
var nbody=document.getElementById('n-body');
var table=document.getElementById('n-tbl');
var tableDiv=document.getElementById('tbl');
var allDiv=document.getElementById('con');
var search=document.getElementById('srch');

window.onload=updateNote();

form.addEventListener('submit',addEvent,false);

search.addEventListener('keyup',searchNotes);
 var noteCount=0;
 var newNote='';
function updateNote(){
        if(noteCount>0){
            tableDiv.style.display='';
            table.appendChild(newNote);
            
        }else{
            tableDiv.style.display='none';
            allDiv.style.border='none';
        }
}

function addEvent(e){
    e.preventDefault();
    
    if(ntitle.value=='' || nbody.value==''){
        alert('Please fill the form!')
    }else{
        var tr=document.createElement('tr');
        tr.className='items';
        
        var td1=document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
        var span=document.createElement('span');
        span.className='note-body'
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);
        
        var td2=document.createElement('td');
        var btn1=document.createElement('button');
        btn1.className='view';
        btn1.appendChild(document.createTextNode('view'));
        td2.appendChild(btn1);
        
        var td3=document.createElement('td');
        var btn2=document.createElement('button');
        btn2.className='del';
        btn2.appendChild(document.createTextNode('Delete'));
        td3.appendChild(btn2);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        noteCount++;
        newNote=tr;
        updateNote();
    }
}

function searchNotes(e){
    var text=e.target.value.toLowerCase();

    var set=table.getElementsByClassName('items');

    var list=Array.from(set);
    list.forEach(function(i){
         var searchTitle=i.firstChild.textContent;
         if(searchTitle.toLocaleLowerCase().indexOf(text) !=-1){
            i.style.display='';
         }else{
            i.style.display='none';
         }
    })
}