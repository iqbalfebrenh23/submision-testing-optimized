import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="list">
          <h2 class="list_resto" tabindex="0">Restaurant Favorite</h2>
        </div>
        
        <div class="content">
        <div id="restaurants" class="post-detail">

        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = `
        <div class="restaurant-item__not__found">Restoran tidak ditemukan</div>
      `;
    }
  },
};

export default Favorite;
