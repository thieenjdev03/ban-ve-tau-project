
var listTicketBlock = 
    document.querySelector('#list-item-row')

var api = 'http://127.0.0.1:5500/api.json'
 
function start(){
    getTicket(renderTicket)
    };

start();

//function 

function getTicket(callback){
    fetch(api)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}
function renderTicket(tickets){
    var listTicketBlock  = 
        document.querySelector('#list-item-row');
    var html = tickets.map(function(ticket){
        return `
        <div class="card_item">
        <div class="over-station_locate">
            <div class="information-station__left">
                <p class = "name-station__left">${nameStationleft}</p>
                <p class = "city-station-left">${city-station-left}</p>
                <p class = "date-start">${date-start}</p>
            </div>
            <i class="fa-solid fa-arrow-right"></i>
            <div class="information-station__right">
                <p class = "name-station__right">${name-station__right}
                </p>
                <p class = "city-station-right">${city-station-right}</p>
            </div>
        </div>
        <div class="line-card_item"></div>
        <div class="ticket-price-section">
            <span class="price-tickets"><h4><span>Từ</span></h4>${price-tickets}</span>
            <img src="/images/button add (lấy).png" alt="">
        </div>
    </div>
        `;
    });
    listTicketBlock.innerHTML = html.join(' ');
}

// function createCourse(data, callback){
//     var options = {
//         method : 'POST',
//         body: JSON.stringify(data)
//     }; 
//     fetch(courseApi, options)
//         .then(function(response){
//             response.json();
//         })
// }


renderCourses();

function handleCreateForm(){ 
    var createBtn = document.querySelector(
        createBtn.onclick = function(){ 
        }
    )
}