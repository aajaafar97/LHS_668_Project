const prompt = require('prompt-sync')({sigint: true});

let no_depression_diag = false;
var diag= new RegExp("Yes"|"No");
var diag2= new RegExp("Yes"|"No");
var diag3= new RegExp("Yes"|"No");
var diag4= new RegExp("Yes"|"No");
var diag5= new RegExp("Yes"|"No");

while (!no_depression_diag) {
diag= prompt('Is the patient experiencing a Sad mood or low interest?(Answer "Yes" or "No")');
 if (diag == 'Yes') 
 {
   diag2=prompt('Is the Patient exhibiting 5 out of 9 symptoms of major depressive disorder now?(Answer "Yes" or "No")');
   if (diag2== 'Yes')
   {
      diag3=prompt('Has the patient experienced a prior manic episode?(Answer "Yes" or "No")');
      if(diag3=='Yes')
      {
      console.log('Patient likely has Bipolar Disorder.');
      break;
    }
      else if(diag3=='No')
      {
        console.log('Patient likely has Major Depressive disorder.');
        break;
      }
    }
   else if(diag2=='No')
   {
   diag4=prompt('Has the patient exhibited 5 out of 9 symptoms of major depressive disorder in the past?(Answer "Yes" or "No")')
   if (diag4=='Yes')
    {
     diag3=prompt('Has the patient experienced a prior manic episode?(Answer "Yes" or "No")');
     if (diag3=='Yes')
     {
     console.log('Patient likely has Bipolar Disorder.');
     break;
     }
     else
     {
     console.log('Major depressive disorder in partial remission.')
     break;
     }
    }
    else if(diag4=='No')
    {
      diag5=prompt('Has the patient exhibited more than 2 years of persistent symptoms?(Answer "Yes" or "No")')
      if(diag5=='Yes')
    {
      console.log('Patient likely has Dysthymic Disorder.')
      break;
    }
     if(diag5=='No')
     {
      console.log('Patient likely has Depression not otherwise specified(recurrent brief, minor, mixed anxiety/depression).')
      break;
     }
    }

   }
 } else {
   console.log('No Diagnosis Available');
   no_depression_diag = true
 }
}