export const createReviewsList = reviews => {
  return reviews
    .map(
      reviewData => ` 
     <li class="reviews-item" id="${reviewData._id - 1}">
           <img
              class="reviews-avatar"
              alt="${reviewData.author}"
              src="${reviewData.avatar_url}" 
            />          
          <h3 class="reviews-name">${reviewData.author}</h3>
          <p class="reviews-text">
            ${reviewData.review}
          </p>
    </li>
  `
    )
    .join('');
};
