let notificationContainer = document.querySelector('.container-notifications');
let button = document.querySelector('.btn-notifications');

let api = [
 {
    id: 1321,
    type: 'text',
    title: 'Test notification',
    text: 'Test text notification',
    expires: 3600
    },
    {
    id: 4322,
    type: 'bonus',
    title: 'You win a bonus!',
    requirement: 'Deposit $50 to win',
    expires: 4600
    },
    {
    id: 5453,
    type: 'Promotion',
    image: 'https://www.freeiconspng.com/uploads/leistungen-promotion-icon-png-0.png',
    title: '%30 off on sports betting',
    link: 'https://www.google.com/',
    },
    {
    id: 5236,
    type: 'text',
    title: 'Test notification',
    text: 'Test text notification',
    expires: 6000
    }
    ]

    let notificationsCount = 0;

    //loop throught the array of objects
    for (let i = 0; i < api.length; i++) {
        notificationsCount++; 
        if(api[i].type === "Promotion"){
           notificationsCount--;
        }       
        //loop throught each object
        for (let key in api[i]) {
            //sort the values from each object and display only the needed information
            if (key !== 'id' && key !== 'type' && key !== 'expires') {
                if (key == 'image') {
                    notificationContainer.innerHTML += `<div class="imgContainer" data-index=${i}><img src="${api[i][key]}" /></div>`;
                } else if (key == 'title') {
                    notificationContainer.innerHTML += `<h3 data-index=${i} >${api[i][key]}</h3>`;
    
                } else if (key == 'link') {
                    notificationContainer.innerHTML += `<div class="link"> <a data-index=${i} href="${api[i][key]}">Link</a><hr data-index=${i}></div>`;
    
                } else {
                    notificationContainer.innerHTML += `<div data-index=${i} >${api[i][key]}</div> <hr data-index=${i}>`;    
                }
            }

            //add numbers of notifications
            document.querySelector("button").innerHTML = "Notifications " +"(" + notificationsCount + ")";

            //find the expiration time from each object
            if (Object.keys(api[i]).indexOf('expires')) {
                //timer - deletes expired containers
                if (key === 'expires') {
                    setTimeout(() => {
                        document.querySelectorAll(`[data-index="${i}"]`).forEach(element => element.remove());
                        notificationsCount--;
                        document.querySelector("button").innerHTML = "Notifications " +"(" + notificationsCount + ")";
                    }, `${api[i][key]}`);
                }
            }
        }  
    }  

//Toggle dropdown menu 
  button.addEventListener('click', () => {
    document.querySelector('.row-notifications').classList.toggle('remove-div'); 
});   
      