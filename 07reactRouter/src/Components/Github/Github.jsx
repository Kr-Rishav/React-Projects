import React, { useEffect, useState } from "react";

function Github() {
//   const [data, setData] = useState({ followers: 0 });
//   useEffect(() => {
//     fetch("https://api.github.com/users/kr-Rishav")
//       .then((response) => {
//         return response.json();
//         console.log("Dekh le response hai ye", response);
//       })
//       .then((userData) => {
//         return setData(userData);
//         console.log(userData);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers:{data.followers}
      <img className="flex" src={data.avatar_url} alt="error" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response =  await fetch("https://api.github.com/users/kr-Rishav");
  return response.json();
};
