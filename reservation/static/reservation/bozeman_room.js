
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
    <img src="static/reservation/assets/img/HotelRooms/BozemanStandard/BozemanStandard1.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/BozemanStandard/BozemanStandard2.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/BozemanStandard/BozemanStandard3.jpg" alt="">
  </div>`
    document.querySelector('#hotel-title').innerHTML = `<h3>Bozeman ${room.charAt(0).toUpperCase() + room.slice(1)}</h3>`;
    document.querySelector('.booknow_room').innerHTML = `Book Now / Php2199 per night`
    document.querySelector('#hotel-content').innerHTML = `<p>The Bozeman Standard Room comprises 1 Double Bed, 2 Bedside Tables, a Desk & Chair that can
    accommodate up to 2-3 persons. The room is furnished with a wall painted in white, trendy furnishings
    and a balcony. Our ultramodern glass bathroom is equipped with hairdryer, magnifying shaving and make
    up mirror as well as all the amenities you could possibly need during your stay in La Mirage Inn and
    Suites. A Complimentary Bottle of Wine, fresh fruit and mineral water, are provided on arrival.
    Bozeman Standard Room amenities includes:</p>`;

    document.querySelector('#hotel-amenities').innerHTML = `<li><i class="ri-check-double-line"></i>1 Double Bed</li>
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
    <img src="static/reservation/assets/img/HotelRooms/BozemanDeluxe/BozemanDeluxe1.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/BozemanDeluxe/BozemanDeluxe2.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/BozemanDeluxe/BozemanDeluxe3.jpg" alt="">
  </div>`
    document.querySelector('#hotel-title').innerHTML = `<h3>Bozeman ${room.charAt(0).toUpperCase() + room.slice(1)}</h3>`;
    document.querySelector('.booknow_room').innerHTML = `Book Now / Php3199 per night`
    document.querySelector('#hotel-content').innerHTML = `<p>The Bozeman Deluxe Room comprises 2 Twin Beds with extra pillows and blankets, 2 Bedside Tables, a
    Desk & Chair. This room is larger than the Bozeman Standard Room and is therefore spacious enough for
    an additional bed for triple occupancy (Triple Room that can accommodate up to 8-10 persons). The room
    is furnished with wall to wall carpeting, trendy furnishings and a balcony. Our ultramodern glass
    bathroom is equipped with complete bathroom amenities and a large jacuzzi. A Complimentary Bottle of
    Wine, a breakfast, fresh fruit and mineral water, are included on arrival. Bozeman Deluxe Room
    amenities includes:</p>`;
    document.querySelector('#hotel-amenities').innerHTML = `<li><i class="ri-check-double-line"></i>2 Twin Beds</li>
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
    <li><i class="ri-check-double-line"></i>Jacuzzi</li>
    <li><i class="ri-check-double-line"></i>Electronic Lock Key System</li>
    <li><i class="ri-check-double-line"></i>Balcony</li>
    <li><i class="ri-check-double-line"></i>Daily Maid Services</li>`

  } else if (room == 'premium') {
    document.querySelector('#hotel-images').innerHTML = `<div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/BozemanPremium/BozemanPremium1.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/BozemanPremium/BozemanPremium2.jpg" alt="">
  </div>

  <div class="swiper-slide">
    <img src="static/reservation/assets/img/HotelRooms/BozemanPremium/BozemanPremium3.jpg" alt="">
  </div>`
    document.querySelector('#hotel-title').innerHTML = `<h3>Bozeman ${room.charAt(0).toUpperCase() + room.slice(1)}</h3>`;
    document.querySelector('.booknow_room').innerHTML = `Book Now / Php4199 per night`
    document.querySelector('#hotel-content').innerHTML = `<p>The Bozeman Premium Room comprises a Queen Size Bed with extra pillows and blankets, 2 Bedside Tables,
    a Desk & Chair. This room is furnished with wall to wall carpeting, trendy furnishings and a large
    private Patio equipped with Mirage Furniture and Mirage Beds and offers a side sea view. This room can
    accommodate a maximum of 20 persons. Our ultramodern glass bathroom is equipped with hairdryer,
    magnifying shaving and make up mirror as well as all the amenities you could possibly need during your
    stay. A large jacuzzi and bathtub included. A Complimentary Bottle of Wine, Fresh Fruit and Mineral
    Water, are provided on arrival. Electric current: 220 Volts. Smoking rooms are also available. Bozeman
    Premium Room amenities includes:</p>`;
    document.querySelector('#hotel-amenities').innerHTML = `<li><i class="ri-check-double-line"></i>Queen Size Bed</li>
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