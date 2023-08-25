/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */

export const fetchAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=12");
    const products = await response.json();
    return products;
  } catch (err) {
    console.error("Uh oh, trouble fetching Products!", err);
  }
};

export const fetchAllCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories = await response.json();
    return categories;
  } catch (err) {
    console.error("Uh oh, trouble fetching Categories!", err);
  }
};

// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// export const fetchSinglePlayer = async (playerId) => {
//   try {
//     const response = await fetch(`${PLAYERS_APIURL}/${playerId}`);
//     const singlePlayerData = await response.json();
//     const player = singlePlayerData.data.player;
//     return player;
//   } catch (err) {
//     console.error(`Oh no, trouble fetching player #${playerId}!`, err);
//   }
// };

// export const addNewPlayer = async (playerPayload) => {
//   try {
//     const response = await fetch(PLAYERS_APIURL, {
//       method: "POST",
//       body: JSON.stringify(playerPayload),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const responseData = await response.json();
//     return responseData;
//   } catch (err) {
//     console.error("Oops, something went wrong with adding that player!", err);
//   }
// };

// export const removePlayer = async (playerId) => {
//   try {
//     const response = await fetch(`${PLAYERS_APIURL}/${playerId}`, {
//       method: "DELETE",
//     });
//     const deleteResponse = await response.json();
//     return deleteResponse;
//   } catch (err) {
//     console.error(
//       `Whoops, trouble removing player #${playerId} from the roster!`,
//       err
//     );
//   }
// };
