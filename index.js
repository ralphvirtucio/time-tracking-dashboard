const tabList = document.querySelector('[role=tablist]');
const cardList = document.querySelector('.cards');
const tabs = document.querySelectorAll('[role=tab]');
const tabPanel = document.querySelector('#tabpanel')

async function init() {
  const data = await fetchData();

  data.forEach(createTimeData);

  tabs.forEach((tab) => {
    tab.addEventListener('click',(e) =>  {
      e.preventDefault();
      const selectedTab = e.currentTarget;
      const currentTab = tabList.querySelector('[aria-selected]');
      switchTabs(selectedTab, currentTab, data)
    });

    
       // KEYBOARD ACCESSIBILITY -------------------------
          //   tab.addEventListener('keydown', (e) => {
          //     let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
              

          //     // if(e.which === 38) {

          //     // }
          //     // let dir = e.which === 38 ? index - 1 : e.which === 40 ? index + 1;

          //     console
          //     console.log(e.which)


          //     if (dir !== null) {
          //       e.preventDefault();

          //       dir === 'down' ? tabs[dir] : switchTabs(e.currentTarget, tabs[dir], data) ? void 0 : ''
          //     }

          //   });
      // END OF KEYBOARD ACCESSIBILITY -------------------------

  });

  const cardContents = document.querySelectorAll('.card__content');
  const moreInfoButtons = document.querySelectorAll('.more-info__btn');


  hoverableCardMoreBtn(cardContents, moreInfoButtons)
  
}

async function fetchData() {
  try {
    const response = await fetch('data.json');

    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`HTTP STATUS: ${error.message}`);
  }
}

const createTimeData = (data) => {
  const { title, timeframes } = data;

  const card = document.createElement('li');
  const cardClassTitle = title.toLowerCase().replace(' ', '');
  card.classList.add('card');
  card.classList.add(cardClassTitle);

  card.innerHTML = createCardElement(title, timeframes, 'daily');

  cardList.appendChild(card);
};


const createCardElement = (title, timeFrame, selectedTimeFrame) => {
  const titleLowerCase = title.toLowerCase();
  const cleanedTitle = `${titleLowerCase.trim().replace(' ', '-')}`;

  const html = `<div class="img">
                <img src="./images/icon-${cleanedTitle}.svg" alt="">
              </div>
              <div class="card__content">
              <div class="card__header">
                <h2 class="card__heading">
                   <a href="#${cleanedTitle}">${title}</a>
                </h2>
                <button aria-label="More info" class="more-info__btn">
                  <svg aria-hidden="true" focusable="false" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                </button>
              </div>
              <div class="card__body">
                <h3 class="current">
                  ${timeFrame[selectedTimeFrame].current}hrs
                </h3>
                <p class="previous__time-info">
                  <span class="previous__time-label">Yesterday</span>
                  -
                  <span class="previous">${timeFrame[selectedTimeFrame].previous}hrs</span>
                </p>
              </div>
            </div>
              `;

  return html;
};

const switchTabs = (selectedTab, currentTab, data) => {
  console.log('selectedTab', selectedTab)
  console.log('currentTab', currentTab)

  if (selectedTab !== currentTab) {
    selectedTab.focus();

    selectedTab.removeAttribute('tabindex');

    selectedTab.setAttribute('aria-selected', 'true');
    currentTab.removeAttribute('aria-selected');
    currentTab.setAttribute('tabindex', '-1');

    tabPanel.setAttribute('aria-labelledby', selectedTab.textContent + ' Panel')

    document.title = selectedTab.textContent + ' | ' + ' TimeTDashboard'

    data.forEach((res, i) => {
      const current = document.querySelectorAll('.current')
      const previous = document.querySelectorAll('.previous')
      const selectedTabValue = selectedTab.textContent.toLowerCase()
      const selectedTimeFrame = res.timeframes[selectedTabValue]
      
      

      const previousLabel = document.querySelectorAll('.previous__time-label')
      let previousLabelValue = ''

      if(selectedTabValue === 'daily') {
        previousLabelValue = 'Yesterday'
      } else if (selectedTabValue === 'weekly') {
        previousLabelValue = 'Last Week'
      } else {
        previousLabelValue = 'Last Month'
      }

      previousLabel[i].textContent = previousLabelValue

      current[i].textContent = selectedTimeFrame.current + 'hrs'
      previous[i].textContent = selectedTimeFrame.previous + 'hrs'
      
    })
  }
};


const hoverableCardMoreBtn = (cards, buttons) => {
  cards.forEach((node, i) => {
    node.addEventListener('mouseenter', () => {
      node.classList.add('hovered')

    })

    node.addEventListener('mouseleave', () => {
      node.classList.remove('hovered')
    })

    buttons[i].addEventListener('mouseenter', () => {
      node.classList.remove('hovered')
      buttons[i].classList.add('hovered')

    })

    buttons[i].addEventListener('mouseleave', () => {
      node.classList.add('hovered')
      buttons[i].classList.remove('hovered')
    })
  })
}



window.addEventListener('DOMContentLoaded', init);
