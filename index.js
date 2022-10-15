const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

const user = {
  name: "Dante",
  lastname: "Rochabrun",
  Profession: "Engineer of System",
  age: "30",
  skills: {
    "UX/UI": {
      adobe: {
        XD: "Prototype and Design",
        Figma: "Prototype and Design",
      },
    },
    FrontEnd: {
      Javascript: "Dynamic Web",
      HTML: "Structured Document",
      CSS: "Style Web Document",
      Frameworks: {
        React: "Web SPA / Components",
        Bootstrap: "Library CSS/HTML/JS",
        NextJS: "React Framework",
      },
    },
    Backend: {
      PHP: "Blog, WebApps",
      NodeJS: "Web Server, app console",
      Frameworks: {
        Express: "Networking services and applications",
      },
    },
  },
};

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json(user);
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
