import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  /* We might want to set a loading screen when fetching API data to account for people using our website who have slower internet connection, as the REACT components will load on screen before the API content is fetched, fed into the DOM and rendered.

  We can check the different loading times of the API elements on our website by right clicking -> inspect -> network -> setting "No throttling" to either "Fast 3G" or "Slow 3G"*/
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //the json() function parses the data received from the website (stored in the lambda variable res) as a json
    // fetch("https://jsonplaceholder.typicode.com/users").then(
    //   (res) =>
    //     res
    //       .json()
    //       .then((data) => setUsers(data))
    //       .finally(() => setLoading(false)) //disable the loading component once the API data is fetched and is to be loaded onto the screen
    // );
    getData();
  }, []);

  // don't forget to use try/catch when using async/await
  const getData = async () => {
    try {
      const users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((res) => res.json());
      const posts = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
      ).then((res) => res.json());

      setLoading(false);
      setUsers(users);
      setPosts(posts);

      console.log("users", users);
      console.log("posts", posts);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <h2>Users</h2>

      {
        loading && (
          <div>Loading...</div>
        ) /* displays a loading message until the API data is fetched  */
      }
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
