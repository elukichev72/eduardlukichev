window.onload = () => {
  const showMoreButton = document.getElementById("showElements");
  const hideButton = document.getElementById("hideElements");
  const showMenuButton = document.getElementById('showMenu')
  const hideMenuButton = document.getElementById('hideMenu')
  const overlay = document.getElementById('overlay')
  const showRepairButton = document.getElementById('showRepair')
  const mainBody = document.getElementById('mainBody')
  const hideRepairButton = document.getElementById('hideRepair')
  const showCallButton = document.getElementById('showCall')
  const hideCallButton = document.getElementById('hideCall')
  const alternativeRepairButton = document.getElementById('alternativeRepair')
  const alternativeCallButton = document.getElementById('alternativeCall')
  
  const showMore = () => {
    const items = document.getElementsByClassName("brands__item_hidden");

    while (items.length !== 0) {
      items[0].classList.replace("brands__item_hidden", "brands__item_active");
    }
    showMoreButton.classList.replace("brands__show", "brands__show_hidden")
    hideButton.classList.replace("brands__hide_hidden", "brands__hide");
  };

  const hideElements = () => {
    const items = document.getElementsByClassName("brands__item_active");
    
    while (items.length !== 0) {
      items[0].classList.replace("brands__item_active", "brands__item_hidden");
    }
    showMoreButton.classList.replace("brands__show_hidden", "brands__show")
    hideButton.classList.replace("brands__hide", "brands__hide_hidden");
  };

  const showMenu = () => {
    const menu = document.getElementsByClassName('menu-container')
    const mainBody = document.getElementById('mainBody')

    overlay.style.display = 'block'
    mainBody.classList.add('disabled')
    menu[0].classList.replace('menu-container', 'menu-container_show')
  }

  const hideMenu = () => {
    const menu = document.getElementsByClassName('menu-container_show')

    overlay.style.display = null
    mainBody.classList.remove('disabled')
    menu[0].classList.replace('menu-container_show', 'menu-container')
  }

  const showRepair = () => {
    const repair = document.getElementsByClassName('feedback-container')

    overlay.style.display = 'block'
    mainBody.classList.add('disabled')
    repair[0].classList.replace('feedback-container', 'feedback-container_show')
  }

  const hideRepair = () => {
    const repair = document.getElementsByClassName('feedback-container_show')

    overlay.style.display = null
    mainBody.classList.remove('disabled')
    repair[0].classList.replace('feedback-container_show', 'feedback-container')
  }

  const showCall = () => {
    const call = document.getElementsByClassName('call-container')

    overlay.style.display = 'block'
    mainBody.classList.add('disabled')
    call[0].classList.replace('call-container', 'call-container_show')
  }

  const hideCall = () => {
    const call = document.getElementsByClassName('call-container_show')

    overlay.style.display = null
    mainBody.classList.remove('disabled')
    call[0].classList.replace('call-container_show', 'call-container')
  }

  showMoreButton.addEventListener("click", showMore);
  hideButton.addEventListener("click", hideElements);
  showMenuButton.addEventListener("click", showMenu)
  hideMenuButton.addEventListener("click", hideMenu)
  overlay.addEventListener("click", hideMenu)
  showRepairButton.addEventListener("click", showRepair)
  alternativeRepairButton.addEventListener("click", showRepair)
  hideRepairButton.addEventListener("click", hideRepair)
  showCallButton.addEventListener("click", showCall)
  alternativeCallButton.addEventListener("click", showCall)
  hideCallButton.addEventListener("click", hideCall)
};
