const submitBtn= document.getElementById('submitBtn');

const cityNam= document.getElementById('cityN');
const city_name= document.getElementById('city-name')
const temp_status= document.getElementById('temp-status');
const dataHide= document.querySelector('.middle-layer');
const temp_real_val= document.getElementById('temp_real_val');

const getinfo= async(event)=>{
    event.preventDefault();
    let cityVal= cityNam.value; 
    
    if(cityVal===""){
      city_name.innerText=`Plz write the city name`;
      dataHide.classList.add('data_hide');
    }
    else{
      try{
        let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=48cfe12afebe8d81db9df5ef501a950f`;
        const response= await fetch(url);
        const data= await response.json();
        const arrData= [data];
        temp_real_val.innerText= arrData[0].main.temp;
         city_name.innerText= `${arrData[0].name},${arrData[0].sys.country}`;
         const tempMood= arrData[0].weather[0].main;

         if(tempMood=='Clear') {
           temp_status.innerHTML= '<i class="fas fa-sun" style="color: #eccc68;"></i>';

         } else if(tempMood==='Clouds'){
           temp_status.innerHTML= '<i class="fas fa-cloud"></i>';
         } else if(tempMood==='Rain'){
             temp_status.innerHTML='<i class="fas fa-cloud-showers-heavy"></i>';
         } 
         else{
           temp_status.innerHTML= '<i class="fas fa-sun" style="color: #eccc68;"></i>';
         }
         dataHide.classList.remove('data_hide');
        
        }

      catch{
        city_name.innerText=`Plz write the city name properly`;
        dataHide.classList.add('data_hide');
      }
      
    }


}

submitBtn.addEventListener('click',getinfo);