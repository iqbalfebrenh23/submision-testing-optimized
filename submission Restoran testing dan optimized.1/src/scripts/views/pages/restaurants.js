import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <div class="list">
        <h2 class="list_resto" tabindex="0">Pilih Restoran Yang Pas Buat Kamu</h2>
      </div>

        <div class="content">
          <div id="restaurants" class="posts">
          </div>
        </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDBSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
