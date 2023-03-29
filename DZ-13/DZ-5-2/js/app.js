// //автоматизированный переход между item по заданному интервалу

const tabs = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelector('.tabheader__items');
const tabsContent = document.querySelectorAll('.tabcontent');

let activeTabIndex = 0;

const hideTabsContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none';
        
    });
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    });
};

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = 'block';
    tabsContent[i].style.animation = 'slide-in 1s forwards';
    tabs[i].classList.add('tabheader__item_active');
};



const switchTab = () => {
    hideTabsContent();
    activeTabIndex = (activeTabIndex + 1) % tabs.length;
    showTabContent(activeTabIndex);
};



hideTabsContent();
showTabContent();

let intervalId = setInterval(switchTab, 5000);
let timeoutId;


tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (item === target) {
                hideTabsContent();
                activeTabIndex = i;
                showTabContent(i);
            }
        });
    }
    clearInterval(intervalId);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        intervalId = setInterval(switchTab, 5000);
    }, 5000);
});

//Кнопка связаться с нами
const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

openModalBtn.addEventListener('click', openModal)

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

closeModalBtn.addEventListener('click', closeModal)


modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

window.addEventListener('scroll', () => {
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal()
    }
})

// //Работа с модальным окном

const title = document.querySelector('.modal__title') 
const forms = document.querySelectorAll("form");

const postData = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const obj = {};

    formData.forEach((item, name) => {
      obj[name] = item;
    });

    const json = JSON.stringify(obj);

    const request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application/json");
    request.send(json);
    request.onload = function() {
            if (request.status === 200) {
                console.log("Success");
                document.body.style.overflow = 'hidden'
                title.innerHTML = "Success! Status - 200"
                title.style.color = "green"
              } else {
                console.log("Error");
                title.innerHTML = "Error, please enter correct data"
                title.style.color = "red"
              }
      };
    
  });
};


forms.forEach((item) => {
  postData(item);
});

