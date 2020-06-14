"user srtict";

// Grt root element...
const app = document.getElementById("root");

// Set user profile...
const user = {
  name: `Maye Edwin`,
  avatar: `./images/GitHub.jpg`,
  twitter: `mayeedwin1`,
  bio: `Software Developer & Speaker`,
};

// Destructure user...
const { name, avatar, twitter, bio } = user;
// Set page title...
document.title = `Home / ${name}`;
// User component...
const html = `
    <section>
      <img src="${avatar}" alt="${name}" />
      <h1 class="name">${name}</h1>
      <p class="bio">${bio}</p>
      <a class="username" href="https://twitter.com/${twitter}" target="_blank">@${twitter}</a>
      <p><small><a class="username" href="https://github.com/pwafire/first-pwa" target="_blank">Source Code</a></small></p>
    </section>
`;

// Render app...
app.innerHTML = html;
