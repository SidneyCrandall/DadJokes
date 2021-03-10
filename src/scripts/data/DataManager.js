let headers = new Headers({
    "Accept": "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36 sdncrandall5@gmail.com",
});

export const getdadJoke = () => {

    return fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: headers,
    }).then(response => response.json())
}