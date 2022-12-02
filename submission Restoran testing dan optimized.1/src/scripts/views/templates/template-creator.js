import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="post-item__title">${restaurant.name}</h2>
  <img loading="lazy" class="post-image__detail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="post__info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address} , Kota ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
    <h4>Foods</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
    <h4>Drinks</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
  </div>
  <div class="post-item__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="post-item__description">
  <h3>Customer Reviews</h3>
  <p>${restaurant.customerReviews.map((customer) => customer.review).join(' | ')}</p>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="post-item">
            <img loading="lazy" class="post-item__image" alt="${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="post-item__content"> 
            <div class="post-item__date">
                <p>⭐️<span class="post-item__score">${restaurant.rating} | ${restaurant.city}</span></p>
            </div>
            <h3 class="post-item__title"><q><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</q></a></h3>
            <p class="post-item__description">${restaurant.description}</p>
        </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
