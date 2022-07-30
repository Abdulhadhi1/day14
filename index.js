var first=createlabel("label", "for", "firstname", "firstname");

var bl=linebreak("br")

var inputefirst=inputfield("input", "type", "firstname","id","firstname");

var b2=linebreak("br");

var last=createlabel("label", "for","last name", "last name");

var b3=linebreak("br")

var inputlast=inputfield("input","type", "last name","id","last name");

var b4=linebreak("br");

var email=createlabel("label", "for", "email", "Email");

var b5=linebreak("br")

var inputemail=inputfield("input", "type", "email","id","email");

var b6=linebreak("br");

var phone=createlabel("label", "for","phonenumber", "phonenumber");

var b7=linebreak("br")

var inputphone=inputfield("input","type", "phonenumber","id","phonenumber");

var b8=linebreak("br");

var button=createlabel("button", "type", "button", "Clickme");

document.body.append(first, bl, inputefirst,b2, last, b3, inputlast, b4,email,b5,inputemail,b6,phone,b7,inputphone,b8,button);


function createlabel (tagname, attrname, attrvalue, content){

    
    var element=document.createElement(tagname);
    
    element.setAttribute(attrname, attrvalue);
    
    element.innerHTML=content;
    
    return element;
}

function inputfield (tagname, attrname, attrvalue, attrname1, attrvalue1){

    var input=document.createElement(tagname);
    
    input.setAttribute(attrname, attrvalue);
    
    input.setAttribute(attrname1, attrvalue1);
    
    return input; 
}


function linebreak (breaker){ 

var b1=document.createElement(breaker);
return b1;

}
