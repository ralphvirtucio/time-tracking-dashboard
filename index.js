const tabList = document.querySelector('[role=tablist]')
const tabs = document.querySelectorAll('[role=tab]');
const cards = document.querySelector('.cards')

const cardHTML = (data, selectedTimeFrame) => {
  const {title, timeframes} = data
  const titleLowerCase = title.toLowerCase()
  const cleanedTitle = titleLowerCase.replace(' ', '');
  const cardClass = `card ${cleanedTitle}`
  const iconURL = `${titleLowerCase.trim().replace(' ', '-')}`
  console.log(selectedTimeFrame)
  const html = 
              `<div class="img">
                <img src="./images/icon-${iconURL}.svg" alt="">
              </div>
              <div class="card__content">
              <div class="card__header">
                <h2 class="card__heading">
                   <a href="#${titleLowerCase}">${title}</a>
                </h2>
                <button aria-label="More info" class="more-info__btn">
                  <svg aria-hidden="true" focusable="false" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                </button>
              </div>
              <div class="card__body daily">
                <h3 class="current">
                  ${selectedTimeFrame.current}hrs
                </h3>
                <p class="previous">
                  <span>Last Week</span>
                  -
                  <span>${selectedTimeFrame.previous}</span>
                </p>
              </div>
            </div>
              `

  return html;
}

async function fetchData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    } 

    const data = await response.json();

    
    return data
  } catch (error) {
    console.error("Fetch error:", error);
  }
}


async function init() {
  const data = await fetchData()

  // data.forEach(res => {
  //   const card = document.createElement("li")
  //   const title = res.title.replace(' ', '').toLowerCase()
  //   card.classList.add('card')
  //   card.classList.add(title)
    
    
  //   card.innerHTML = cardHTML(res)
  //   cards.appendChild(card)
    


  // })


  tabs.forEach((tab) => {
    
    tab.addEventListener('click', (e) => {
      e.preventDefault()
      const selectedTab = e.currentTarget
      const currentTab = tabList.querySelector('[aria-selected]')

      selectedTab.focus()

      selectedTab.removeAttribute('tabindex')

      selectedTab.setAttribute('aria-selected', 'true')
      currentTab.removeAttribute('aria-selected')
      currentTab.setAttribute('tabindex', '-1')

      // data.forEach(res => {
      //     const card = document.createElement("li")
      //     const title = res.title.replace(' ', '').toLowerCase()
      //     card.classList.add('card')
      //     card.classList.add(title)
      //     const selectedTimeFrame = res.timeframes[selectedTab.getAttribute('id')]
      //     card.innerHTML = cardHTML(res, selectedTimeFrame)

      //     cards.appendChild(card)

      // })

    })
  })
}




window.addEventListener('DOMContentLoaded', init)

// tabs.forEach(tab => {
//   console.log(tab)
// })