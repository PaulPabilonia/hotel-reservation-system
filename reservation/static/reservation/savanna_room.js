
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
    <img src="static/reservation/assets/img/HotelRooms/SavannaStandard/SavannaStandard1.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/SavannaStandard/SavannaStandard2.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/SavannaStandard/SavannaStandard3.jpg" alt="">
  </div>`
    document.querySelector('#hotel-title').innerHTML = `<h3>Savanna ${room.charAt(0).toUpperCase() + room.slice(1)}</h3>`;
    document.querySelector('.booknow_room').innerHTML = `Book Now / Php2499 per night`
    document.querySelector('#hotel-content').innerHTML = `<p>The Savanna Standard Room comprises 1 Double Bed, 1 Bedside Tables, a Desk & Chair that can
    accommodate up to 3-5 persons. The room is furnished with a wall painted in crystal white, trendy
    furnishings and a balcony. A private pool is included in this room. Our ultramodern glass bathroom is
    equipped with branded bathroom amenities and a makeup mirror as well as all the extra amenities you
    could possibly need during your stay in La Mirage Inn and Suites. A Complimentary Bottle of Champagne,
    fresh fruit and mineral water, are provided on arrival. Savanna Standard Room amenities includes:</p>`;
    document.querySelector('#hotel-amenities').innerHTML = ` <li><i class="ri-check-double-line"></i>1 Double Bed</li>
    <li><i class="ri-check-double-line"></i>Private Pool</li>
    <li><i class="ri-check-double-line"></i>Flat Screen TV with satellite channels</li>
    <li><i class="ri-check-double-line"></i>Desk, Chairs and Table</li>
    <li><i class="ri-check-double-line"></i>Individually Controlled AC System</li>
    <li><i class="ri-check-double-line"></i>Telephone</li>
    <li><i class="ri-check-double-line"></i>Wi-Fi Connection</li>
    <li><i class="ri-check-double-line"></i>Coffee and Tea Maker</li>
    <li><i class="ri-check-double-line"></i>Refrigerator</li>
    <li><i class="ri-check-double-line"></i>Soundproof Walls</li>
    <li><i class="ri-check-double-line"></i>Bathroom Amenities </li>
    <li><i class="ri-check-double-line"></i>Balcony</li>
    <li><i class="ri-check-double-line"></i>Daily Maid Services</li>`

  } else if (room == 'deluxe') {
    document.querySelector('#hotel-images').innerHTML = `<div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/SavannaDeluxe/SavannaDeluxe1.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/SavannaDeluxe/SavannaDeluxe2.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/SavannaDeluxe/SavannaDeluxe3.jpg" alt="">
  </div>`
    document.querySelector('#hotel-title').innerHTML = `<h3>Savanna ${room.charAt(0).toUpperCase() + room.slice(1)}</h3>`;
    document.querySelector('.booknow_room').innerHTML = `Book Now / Php3499 per night`
    document.querySelector('#hotel-content').innerHTML = `<p>The Savanna Deluxe Room comprises 2 Twin Beds with 3 extra pillows and 3 blankets, 2 Bedside Tables, a
    Desk & Chair. Extra bed can be added upon request. This deluxe room can accommodate up to 5-12
    persons. The room is furnished with a wall painted in crystal white, trendy furnishings and a balcony.
    A private pool is included in this room. Our ultramodern glass bathroom is equipped with hairdryer,
    magnifying shaving and make up mirror as well as all the amenities you could possibly need during your
    stay in La Mirage Inn and Suites. A large jacuzzi and bathtub included. A Complimentary Bottle of
    Champagne, fresh fruit and mineral water, are provided on arrival. Savanna Deluxe Room amenities
    includes:</p>`;
    document.querySelector('#hotel-amenities').innerHTML = `<li><i class="ri-check-double-line"></i>2 Twin Beds</li>
    <li><i class="ri-check-double-line"></i>Private Pool</li>
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
    <li><i class="ri-check-double-line"></i>Jacuzzi and Large Bathtub</li>
    <li><i class="ri-check-double-line"></i>Electronic Lock Key System</li>
    <li><i class="ri-check-double-line"></i>Balcony with smoking area</li>
    <li><i class="ri-check-double-line"></i>Daily Maid Services</li>`

  } else if (room == 'premium') {
    document.querySelector('#hotel-images').innerHTML = `<div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/SavannaPremium/SavannaPremium1.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/SavannaPremium/SavannaPremium2.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/SavannaPremium/SavannaPremium3.jpg" alt="">
  </div>`
    document.querySelector('#hotel-title').innerHTML = `<h3>Savanna ${room.charAt(0).toUpperCase() + room.slice(1)}</h3>`;
    document.querySelector('.booknow_room').innerHTML = `Book Now / Php4499 per night`
    document.querySelector('#hotel-content').innerHTML = `<p>The Savanna Premium Room comprises a 3 Queen Size Bed with 6 extra pillows and 6 blankets, 2 Bedside
    Tables, a Desk & Chair. Extra bed, additional pillows and blankets can be added upon request This room
    is furnished with wall to wall carpeting, trendy furnishings exclusively made by Mirage furniture and
    a large private balcony, smoking area included that offers a side sea view. This room can accommodate
    a maximum of 25 persons. Our ultramodern glass bathroom is equipped with hairdryer, magnifying shaving
    and make up mirror as well as all the amenities you could possibly need during your stay. A large
    jacuzzi and bathtub included. A Complimentary 2 Bottle of Champagne, Fresh Fruit and Mineral Water,
    are provided on arrival. Electric current: 220 Volts. Smoking rooms are also available. Savanna
    Premium Room amenities includes:</p>`;
    document.querySelector('#hotel-amenities').innerHTML = `<li><i class="ri-check-double-line"></i>3 Queen Size Bed</li>
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