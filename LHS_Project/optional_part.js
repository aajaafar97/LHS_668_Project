const prompt = require('prompt-sync')({sigint: true});

var dsm= new RegExp("Yes"|"No");
var dsm2= new RegExp("Yes"|"No");
var dsm3= new RegExp("Yes"|"No");
var dsm4= new RegExp("Yes"|"No");
var dsm5= new RegExp("Yes"|"No");
var dsm6= new RegExp("Yes"|"No");
var dsm7= new RegExp("Yes"|"No");
var dsm8= new RegExp("Yes"|"No");
var dsm9= new RegExp("Yes"|"No");

for (var count = 0; count < 5;) {
{
    dsm=prompt('Has the patient expressed a depressed mood(sometimes irritability in chilrden and adolescents) most of the day, nearly every day?(Answer "Yes" or "No")')
    {
    if (dsm=='Yes')
    {
        count++
        console.log(count)
        
    }
    else if(dsm=='No')
        {
        console.log('At least depressed mood or loss of interest of pleasure must be present')
        break;
        }
    }
    dsm2=prompt('Has the patient exhibited markedly diminished interest or pleasure in almost all activties most of the day, nearly every day?(Answer "Yes" or "No".)')
    {
     if (dsm2=='Yes')
         {
            count++
            console.log(count)
        }
        else if(dsm2=='No')
            {
                console.log('At least depressed mood or loss of interest of pleasure must be present');
                break;
        }
    }
    dsm3=prompt('Has the patient experienced significant weightloss/gain?(Answer "Yes" or "No")')

        if (dsm3=='Yes')
        {
            count++
            console.log(count)
            
        }
        else if(dsm3=='No')
            {
            count+0;
            console.log(count);
            }
    dsm4=prompt('Has the patient experienced insomnia/hypersomnia?(Answer "Yes" or "No")')

            if (dsm4=='Yes')
            {
                count++
                console.log(count)
                
            }
            else if(dsm4=='No')
                {
                count+0;
                console.log(count);
                }           
    dsm5=prompt('Has the patient experienced significant weight loss/gain?(Answer "Yes" or "No")')

        if (dsm5=='Yes')
        {
            count++
            console.log(count)
            
        }
        else if(dsm5=='No')
            {
            count+0;
            console.log(count);
            }
        if (count=='5')
            break;
    dsm6=prompt('Has the patient exhibited psychomotor agitation/retardation?(Answer "Yes" or "No")')

        if (dsm6=='Yes')
        {
            count++
            console.log(count)
            
        }
        else if(dsm6=='No')
            {
            count+0;
            console.log(count);
            }   
        if (count=='5')
            break;        
    dsm7=prompt('Has the patient experienced fatigue(loss of energy?)(Answer "Yes" or "No")')

        if (dsm7=='Yes')
        {
            count++
            console.log(count)
            
        }
        else if(dsm7=='No')
            {
            count+0;
            console.log(count);
            }  
        if (count=='5')
            break;          
    dsm8=prompt('Has the patient experienced impaired concentartion(indecisiveness)(Answer "Yes" or "No")?')
             if (dsm8=='Yes')
            {
                count++
                console.log(count)
                
            }
            else if(dsm8=='No')
                {
                count+0;
                console.log(count);
                }     
            if (count=='5')
                break; 
    dsm9=prompt('Has the patient experienced recurrent thoughts of death or suicide?(Answer "Yes" or "No")')
                if (dsm9=='Yes')
               {
                   count++
                   console.log(count)
               }
               else if(dsm9=='No')
                   {
                   count+0;
                   console.log(count);
                   }
                if (count=='5')
                    break;    
console.log("5 out of 9 symptoms not met");              
break;
}
}

