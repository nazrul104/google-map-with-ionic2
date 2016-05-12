import {Page} from 'ionic-angular';
import {Geolocation} from 'ionic-native';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  constructor() {
  	 this.loadMap();

  }
   loadMap(){
  let options = {timeout: 10000, enableHighAccuracy: true};
    //ENABLE THE FOLLOWING:
    
    Geolocation.getCurrentPosition(options).then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(document.querySelector('#map'), mapOptions);
      var x = document.querySelector('#map');
      console.log(x);

       /* var element = angular.element(document.querySelector('#mycart'));
                element.text(basket.cartDataCounter());*/
    });
  }

}
