// Register User

export const signupUser = async (email, username, password) => {
  // console.log(email, username, password);
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

export const login = async (username, password) => {
  console.log(username, password);
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        // username: username,
        // password: password,
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
