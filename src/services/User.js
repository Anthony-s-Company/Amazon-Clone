// Register User

export const signupUser = async (email, username, password) => {
  console.log(email, username, password);
  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        name: {
          firstname: "",
          lastname: "",
        },
        address: {
          city: "",
          street: "",
          number: "",
          zipcode: "",
          geolocation: {
            lat: "",
            long: "",
          },
        },
        phone: "",
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
