$(document).ready(function(){    
    var clone = $('#content').clone();

    clone.appendTo('body').find(':hidden').remove();

    var theText = clone.text();

    clone.remove();
    var newText=theText
    console.log(theText);
    $("_4l5g").addClass("bad");
    
});

var elements=document.getElementsByTagName('*');
//var oldWord=Document.getElementById("new");
//var newWord=Document.getElemtnById("old");
for(var i=0;i<elements.length;i++){
    
    var element=elements[i];
    
    for(var j=0;j<element.childNodes.length;j++){
        
        var node=element.childNodes[j];
        if(node.nodeType==3){
            var text=node.nodeValue;
            var replacedText=text.replace(/jacob/g, 'herb')
            if(replacedText!=text){
                console.log('replaced');
                element.replaceChild(document.createTextNode(replacedText),node);
                //node.nodeValue=replacedText;
            }
            
          }
        
        }
    
}

function save()
{
    
}
    
