const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node API Server Updated');
});

//REST api
app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.route("/api/users/:id").get((res, req) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}).put((req, res) => {
    return res.json({ status: "Pending" });
}).delete((req, res) => {
    console.log("delete");
});

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status : "success", id: users.length });
    });
});

//Routes
app.get("/users", (req, res) => {
        const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")};
        </ul>
        `;
        res.send(html);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});