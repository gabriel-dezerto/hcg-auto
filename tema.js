function pegaID (){
    const elementoSelect = document.getElementById('selectModo').value

    console.log(elementoSelect)

    if(elementoSelect == 'light'){
       document.documentElement.setAttribute("modo-light-dark", "light");
    } else if(elementoSelect == 'dark'){
        document.documentElement.setAttribute("modo-light-dark", "dark");
    } else{
         document.documentElement.setAttribute("modo-light-dark", "");
    }
}