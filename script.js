var form=document.getElementById('frm');
var ntitle=document.getElementById('title');
var nbody=document.getElementById('n-body');
var table=document.getElementById('n-tbl');
var tableDiv=document.getElementById('tbl');
var allDiv=document.getElementById('con');
var search=document.getElementById('srch');
var resetText=document.getElementById('reset');
var save=document.getElementById('save');

window.onload=updateNote();

save.addEventListener('click',addEvent);

search.addEventListener('keyup',searchNotes);

table.addEventListener('click',dataDelete);
table.addEventListener('click',viewData);
resetText.addEventListener('click',reset);
 var noteCount=0;
 var newNote='';
 var record='';
 var note='';
 var isUpdate=false;
function updateNote(){
        if(noteCount>0){
            tableDiv.style.display='';
            if(isUpdate){
                note.firstChild.textContent=ntitle.value;
                note.lastChild.textContent=nbody.value;
                noteCount--;
                isUpdate=false;
            }else{
            table.appendChild(newNote);
            }
        }else{
            tableDiv.style.display='none';
            allDiv.style.border='none';
        }
}

function addEvent(e){
    e.preventDefault();
    
    if(ntitle.value==='' || nbody.value===''){
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
    
    reset();
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

function dataDelete(e){
    if(e.target.className==='del'){
        if(confirm('Are you sure?')){
            var title=e.target.parentElement.parentElement;
            table.removeChild(title);
            noteCount--;
            updateNote();
        }
        

    }
}
function viewData(e){
    if(e.target.className==='view'){
        record=e.target.parentElement.parentElement;
        note=record.firstChild;
        ntitle.value=note.firstChild.textContent;
        nbody.value=note.lastChild.textContent;
        isUpdate=true;
    }
}
function reset(){
    ntitle.value='';
    nbody.value='';
    isUpdate=false;
    newNote='';
}