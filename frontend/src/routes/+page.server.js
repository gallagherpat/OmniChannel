const postUser = async function () {
    const raw = JSON.stringify({
        "data": {
            "identifier": "gkpresales@gmail.com",
            "password": "GKuser123"
        }
    })
    const req = await fetch(`http://127.0.0.1:1337/api/users`)
}

const getUserRequest = async function () {
    const req = await fetch(`http://127.0.0.1:1337/api/users`)
    const data = await req.json();
    console.log(data);
}

getUserRequest();