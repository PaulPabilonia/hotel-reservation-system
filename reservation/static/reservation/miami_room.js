
document.addEventListener('DOMContentLoaded', function () {

  // Use buttons to toggle between views
  document.querySelector('#standard').addEventListener('click', () => load_hotelroom('standard'));
  document.querySelector('#deluxe').addEventListener('click', () => load_hotelroom('deluxe'));
  document.querySelector('#premium').addEventListener('click', () => load_hotelroom('premium'));
  // By default, load the standard room
  load_hotelroom('standard');

});

function load_hotelroom(room) {

  // Show the room and hide other views
  document.querySelector('#roomdetails').style.display = 'block';

  if (room == 'standard') {
    // Glasglow Standard
    document.querySelector('#hotel-images').innerHTML = `<div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/MiamiStandard/MiamiStandard1.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/MiamiStandard/MiamiStandard2.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/MiamiStandard/MiamiStandard3.jpg" alt="">
  </div>`
    document.querySelector('#hotel-title').innerHTML = `<h3>Miami ${room.charAt(0).toUpperCase() + room.slice(1)}</h3>`;
    document.querySelector('.booknow_room').innerHTML = `Book Now / Php2999 per night`
    document.querySelector('#hotel-content').innerHTML = `<p>The Miami Standard Room comprises 1 Single Bed, 2 Bedside Table, a Desk & Chair that can accommodate
    up to 5 maximum persons. The room is fully furnished with a wall painted in white and blue, trendy
    furnishings that are made up of Mirage Furniture and a balcony with smoking area. Our ultramodern
    glass bathroom is equipped with hairdryer, magnifying shaving and a large make up mirror as well as
    all the amenities you could possibly need during your stay in La Mirage Inn and Suites. A
    Complimentary Bottle of Wine, fresh fruit and mineral water, are provided on arrival. Miami Standard
    Room amenities includes:</p>`;
    document.querySelector('#hotel-amenities').innerHTML = `<li><i class="ri-check-double-line"></i>1 Single Bed</li>
    <li><i class="ri-check-double-line"></i>2 Bedside Table</li>
    <li><i class="ri-check-double-line"></i>Desk, Chairs and Table</li>
    <li><i class="ri-check-double-line"></i>Flat Screen TV with satellite channels</li>
    <li><i class="ri-check-double-line"></i>Individually Controlled AC System</li>
    <li><i class="ri-check-double-line"></i>Telephone</li>
    <li><i class="ri-check-double-line"></i>Wi-Fi Connection</li>
    <li><i class="ri-check-double-line"></i>Coffee Maker</li>
    <li><i class="ri-check-double-line"></i>Refrigerator</li>
    <li><i class="ri-check-double-line"></i>Soundproof Walls</li>
    <li><i class="ri-check-double-line"></i>Bathroom Amenities </li>
    <li><i class="ri-check-double-line"></i>Balcony with smoking area</li>
    <li><i class="ri-check-double-line"></i>Daily Maid Services</li>`

  } else if (room == 'deluxe') {
    document.querySelector('#hotel-images').innerHTML = `<div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/MiamiDeluxe/MiamiDeluxe1.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/MiamiDeluxe/MiamiDeluxe2.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/MiamiDeluxe/MiamiDeluxe3.jpg" alt="">
  </div>`
    document.querySelector('#hotel-title').innerHTML = `<h3>Miami ${room.charAt(0).toUpperCase() + room.slice(1)}</h3>`;
    document.querySelector('.booknow_room').innerHTML = `Book Now / Php3999 per night`
    document.querySelector('#hotel-content').innerHTML = `<p>The Miami Deluxe Room comprises 2 Twin Beds with extra pillows and blankets, 2 Bedside Tables, a
    Desk & Chair. This room is larger than the Miami Standard Room and is therefore spacious enough for
    an additional bed for triple occupancy (Triple Room that can accommodate up to 8-10 persons). The room
    is furnished with wall to wall carpeting, trendy furnishings and a balcony. Our ultramodern glass
    bathroom is equipped with complete bathroom amenities and a large jacuzzi. A Complimentary Bottle of
    Wine, a breakfast, fresh fruit and mineral water, are included on arrival. Miami Deluxe Room
    amenities includes:</p>`;
    document.querySelector('#hotel-amenities').innerHTML = `<li><i class="ri-check-double-line"></i>2 Twin Beds</li>
    <li><i class="ri-check-double-line"></i>Extra pillows ang blankets</li>
    <li><i class="ri-check-double-line"></i>Flat Screen TV with satellite channels</li>
    <li><i class="ri-check-double-line"></i>Desk, Chairs and Table</li>
    <li><i class="ri-check-double-line"></i>Soundproof Walls</li>
    <li><i class="ri-check-double-line"></i>Individually Controlled AC System</li>
    <li><i class="ri-check-double-line"></i>Telephone</li>
    <li><i class="ri-check-double-line"></i>Wi-Fi Connection</li>
    <li><i class="ri-check-double-line"></i>Coffee and Tea Maker</li>
    <li><i class="ri-check-double-line"></i>Refrigerator</li>
    <li><i class="ri-check-double-line"></i>Bathroom Amenities </li>
    <li><i class="ri-check-double-line"></i>Hairdryer</li>
    <li><i class="ri-check-double-line"></i>Jacuzzi and Bathtub</li>
    <li><i class="ri-check-double-line"></i>Electronic Lock Key System</li>
    <li><i class="ri-check-double-line"></i>Balcony</li>
    <li><i class="ri-check-double-line"></i>Daily Maid Services</li>`

  } else if (room == 'premium') {
    document.querySelector('#hotel-images').innerHTML = `<div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/MiamiPremium/MiamiPremium1.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/MiamiPremium/MiamiPremium2.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/MiamiPremium/MiamiPremium3.jpg" alt="">
  </div>`
    document.querySelector('#hotel-title').innerHTML = `<h3>Miami ${room.charAt(0).toUpperCase() + room.slice(1)}</h3>`;
    document.querySelector('.booknow_room').innerHTML = `Book Now / Php4999 per night`
    document.querySelector('#hotel-content').innerHTML = `<p>The Miami Premium Room comprises a 2 Queen Size Bed with 4 extra pillows and 4 blankets, 2 Bedside
    Tables, a Desk & Chair. Extra bed, additional pillows and blankets can be added upon request This room
    is furnished with wall to wall carpeting, trendy furnishings exclusively made by Mirage furniture and
    a large private balcony, smoking area included that offers a side sea view. This room can accommodate
    a maximum of 20 persons. Our ultramodern glass bathroom is equipped with hairdryer, magnifying shaving
    and make up mirror as well as all the amenities you could possibly need during your stay. A large
    jacuzzi and bathtub included. A Complimentary Bottle of Wine, Fresh Fruit and Mineral Water, are
    provided on arrival. Electric current: 220 Volts. Smoking rooms are also available. Miami Premium Room
    amenities includes:</p>`;
    document.querySelector('#hotel-amenities').innerHTML = `<li><i class="ri-check-double-line"></i>2 Queen Size Bed</li>
    <li><i class="ri-check-double-line"></i>Extra pillows and blankets</li>
    <li><i class="ri-check-double-line"></i>Flat Screen TV with satellite channels</li>
    <li><i class="ri-check-double-line"></i>Desk, Chairs and Table</li>
    <li><i class="ri-check-double-line"></i>Soundproof Walls</li>
    <li><i class="ri-check-double-line"></i>Individually Controlled AC System</li>
    <li><i class="ri-check-double-line"></i>Electronic Lock Key System</li>
    <li><i class="ri-check-double-line"></i>Electronic Safe Box</li>
    <li><i class="ri-check-double-line"></i>Mini Bar</li>
    <li><i class="ri-check-double-line"></i>Refrigerator</li>
    <li><i class="ri-check-double-line"></i>Telephone</li>
    <li><i class="ri-check-double-line"></i>Wi-Fi Connection</li>
    <li><i class="ri-check-double-line"></i>Coffee and Tea Maker</li>
    <li><i class="ri-check-double-line"></i>Bathroom Amenities </li>
    <li><i class="ri-check-double-line"></i>Hairdryer</li>
    <li><i class="ri-check-double-line"></i>Jacuzzi and Bathtub</li>
    <li><i class="ri-check-double-line"></i>Balcony</li>
    <li><i class="ri-check-double-line"></i>Daily Maid Services</li>`
  }


  console.log("Working..")
}