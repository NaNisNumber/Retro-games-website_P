export const addNewPropertiesToGameObj = (gamesArr) => {
  for (let i = 0; i < gamesArr.length; i++) {
    const game = gamesArr[i];
    const gameRating = game.rating;

    if (gameRating <= 20) {
      game.starRating = "1 star";
      game.price = "10$";
    } else if (gameRating > 20 && gameRating <= 40) {
      game.starRating = "2 stars";
      game.price = "10$";
    } else if (gameRating > 40 && gameRating <= 60) {
      game.starRating = "3 stars";
      game.price = "15$";
    } else if (gameRating > 60 && gameRating <= 80) {
      game.starRating = "4 stars";
      game.price = "20$";
    } else {
      game.starRating = "5 stars";
      game.price = "22$";
    }
  }
};
