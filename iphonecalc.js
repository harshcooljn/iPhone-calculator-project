function number_press(n){
    let screenText = document.querySelector('.ans');
    screenText.innerText += `${n}`;
    console.log(screenText.innerText);
}

function equals(){
    console.log('in equals function');
    let screenText = document.querySelector('.ans').innerText;
    let result="";
    let op;
    let j;
    for (let i=0;i<screenText.length;i++){
        if (screenText[i]>='0' && screenText[i]<='9' || screenText[i]==='.'){
            result+=screenText[i];
        }
        else{
            op=screenText[i];
            j=i+1;
            break;
        }
        
    }
    console.log(result,op);
    result = Number(result);
    let num="";

    for (let i=j;i<screenText.length;i++){
        if (screenText[i]>='0' && screenText[i]<='9' || screenText[i]==='.'){
            num+=screenText[i];
        }
        else{
            num = Number(num);
            switch (op){
                case '+':
                    result+=num;
                    break;
                case '-':
                    result-=num;
                    break;
                case '*':
                    result*=num;
                    break;
                case '/':
                    result/=num;
                    break;    
            }
            op = screenText[i];
            num="";
        }

    }
    num = Number(num);
    switch (op){
        case '+':
            result+=num;
            break;
        case '-':
            result-=num;
            break;
        case '*':
            result*=num;
            break;
        case '/':
            result/=num;
            break;    
    }
    result = String(result);
    document.querySelector('.ans').innerText = result;

}


function clearscreen(){
    document.querySelector('.ans').innerText="";
}