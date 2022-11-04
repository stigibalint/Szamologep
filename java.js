function szamolj(muvelet){
    var a = parseFloat(document.getElementById('szamA').value);
    var b = parseFloat(document.getElementById('szamB').value);
  
    
    if (muvelet=="+"){
        document.getElementById('eredmeny').innerHTML = a+b;
    }
    else if(muvelet=="-"){
        document.getElementById('eredmeny').innerHTML = a-b;
    }
    else if(muvelet=="*"){
        document.getElementById('eredmeny').innerHTML = a*b;
    }
    else if(muvelet=="/"){
        document.getElementById('eredmeny').innerHTML = a/b;
    }
}



