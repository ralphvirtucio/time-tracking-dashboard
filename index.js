



// const list = document.querySelector('.list');
// const form = document.querySelector('form')




// fetch('/data.json')
//   .then((req) => {
//     if (!req.ok) {
//       throw new Error(`HTTP error: ${req.status}`);
//     }

//     return req.json();
//   })
//   .then((data) => {
//     displayTimeStats(data)
//   })
//   .catch((error) => {
//     console.error(`Could not get data: ${error}`);
//   });


//   // DAPAT HINDI SIYA NAG ADD KADA CHANGE 
//   const displayTimeStats = (stat) => {
//       form.addEventListener('change', (e) => {
//       const value = e.target.value
    
//     stat.forEach(data => {
//       const listItem = document.createElement('li');
//       const title = data.title.replace(' ', '').toLowerCase();
//       listItem.classList.add(`list-item`);
//       listItem.classList.add(title);
//         listItem.innerHTML = `
//           <div class="container">
//                   <div class="list-item__header">
//                     <h3 class="title">${data.title}</h3>
//                     <button aria-label="Change">
//                       <svg
//                         aria-hidden="true"
//                         focusable="false"
//                         width="21"
//                         height="5"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
//                           fill="#BBC0FF"
//                           fill-rule="evenodd" />
//                       </svg>
//                     </button>
//                   </div>
//                   <div class="list-item__content" data-time="weekly">
//                     <h4 class="current">${data.timeframes[value].current}hrs</h4>
//                     <p class="previously">${data.timeframes[value].previous}</p>
//                   </div>
//         </div>
//       `;

//         list.appendChild(listItem)
//     })

//   })
//   }

 


// // const appendItem = (item, time) => {
// //   const listItem = document.createElement('li');
// //   const title = item.title.replace(' ', '').toLowerCase();
// //   listItem.classList.add(`list-item`);
// //   listItem.classList.add(title);
// //   listItem.innerHTML = `
// //       <div class="container">
// //               <div class="list-item__header">
// //                 <h3 class="title">${item.title}</h3>
// //                 <button aria-label="Change">
// //                   <svg
// //                     aria-hidden="true"
// //                     focusable="false"
// //                     width="21"
// //                     height="5"
// //                     xmlns="http://www.w3.org/2000/svg">
// //                     <path
// //                       d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
// //                       fill="#BBC0FF"
// //                       fill-rule="evenodd" />
// //                   </svg>
// //                 </button>
// //               </div>
// //               <div class="list-item__content" data-time="weekly">
// //                 <h4 class="current">${item.timeframes.weekly.current}hrs</h4>
// //                 <p class="previously">${item.timeframes.weekly.previous}</p>
// //               </div>
// //     </div>
// //   `;


// //   list.appendChild(listItem)
// // };
