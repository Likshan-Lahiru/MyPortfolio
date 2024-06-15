$("#home-section").css({display:'block'});
$("#customer-section").css({display: 'none'});
$("#item-section").css({display: 'none'});
$("#order-section").css({display: 'none'});
$("#order-details-section").css({display: 'none'});

$("#customer-btn").on('click',()=>{
    $("#customer-section").css({display:'block'});
    $("#item-section").css({display:'none'});
    $("#home-section").css({display:'none'});
    $("#order-section").css({display: 'none'});
    $("#order-details-section").css({display: 'none'});
});
$("#item-btn").on('click',()=>{
    $("#item-section").css({display:'block'});
    $("#customer-section").css({display:'none'});
    $("#home-section").css({display:'none'});
    $("#order-section").css({display: 'none'});
    $("#order-details-section").css({display: 'none'});
});
$("#store-btn").on('click',()=>{
    $("#customer-section").css({display:'none'});
    $("#item-section").css({display:'none'});
    $("#home-section").css({display:'none'});
    $("#order-section").css({display: 'block'});
    $("#order-details-section").css({display: 'none'});
});
$("#home-btn").on('click',()=>{
    $("#home-section").css({display:'block'});
    $("#customer-section").css({display:'none'});
    $("#item-section").css({display:'none'});
    $("#order-section").css({display: 'none'});
    $("#order-details-section").css({display: 'none'});
});
$("#order-detail").on('click',()=>{
    $("#home-section").css({display:'none'});
    $("#customer-section").css({display:'none'});
    $("#item-section").css({display:'none'});
    $("#order-section").css({display: 'none'});
    $("#order-details-section").css({display: 'block'});
});


setInterval(function() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    document.getElementById('liveClock').innerText = timeString;
}, 1000);

// Update live calendar every second
setInterval(function() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('liveCalendar').innerText = dateString;
}, 1000);

function customAlert(message) {
    // Create the outer overlay div
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

    // Create the alert box
    const alertBox = document.createElement('div');
    alertBox.style.backgroundColor = '#fff';
    alertBox.style.padding = '20px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    alertBox.style.textAlign = 'center';
    alertBox.style.maxWidth = '300px';
    alertBox.style.width = '100%';

    // Create the message paragraph
    const msgParagraph = document.createElement('p');
    msgParagraph.textContent = message;
    msgParagraph.style.margin = '0 0 20px';

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'OK';
    closeButton.style.padding = '10px 20px';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.backgroundColor = '#007BFF';
    closeButton.style.color = '#fff';
    closeButton.style.cursor = 'pointer';

    // Add event listener to the close button
    closeButton.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    // Append the message and button to the alert box
    alertBox.appendChild(msgParagraph);
    alertBox.appendChild(closeButton);

    // Append the alert box to the overlay
    overlay.appendChild(alertBox);

    // Append the overlay to the body
    document.body.appendChild(overlay);
}