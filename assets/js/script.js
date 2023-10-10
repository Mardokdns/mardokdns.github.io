const url = "https://api.orgdestiny.com/xyz/476434057677504513"

let func = async (dateGuildSince) => {
    // CURRENT TIME BOOST IN SERVER
    const premiumGuildSince = dateGuildSince;
    // DATE IN TIMESTAMP
    let date;
    // NAME BOOST FILE
    let badge;
  
    // VERIFY IF TIME BOOST IS NOT NULL
    if (premiumGuildSince != null) date = Date.now() - new Date(premiumGuildSince);
  
    // IF DATE IS NULL RETURN NULL;
    if (date == null) return date;
  
    // VERIFIY TIMESTAMP AND RETURN NAME FILE BADGE
    if (date >= 1000 && date < 5256000000) badge = "./assets/image/1-month.svg";
    if (date >= 5256000000 && date < 7884000000) badge = "./assets/image/2-month.svg";
    if (date >= 7884000000 && date < 15768000000) badge = "./assets/image/3-month.svg";
    if (date >= 15768000000 && date < 23652000000) badge = "./assets/image/6-month.svg";
    if (date >= 23652000000 && date < 31536000000) badge = "./assets/image/9-month.svg";
    if (date >= 31536000000 && date < 47304000000) badge = "./assets/image/12-month.svg";
    if (date >= 47304000000 && date < 63072000000) badge = "./assets/image/18-month.svg";
    if (date >= 63072000000) badge = "./assets/image/24-month.svg";
    // RETURN NAME FILE OR EMPTY
    document.querySelector("#boost-photo").src = badge ? badge : '';
}

fetch(url).then((res) => {
    res.json().then((jsonResponse) => {
        console.log(jsonResponse)
        document.querySelector("#name").textContent = `${jsonResponse.user.global_name}`
        let image = `https://cdn.discordapp.com/avatars/${jsonResponse.user.id}/${jsonResponse.user.avatar}`
        document.querySelector("#photo").src = `${image}`
        func(jsonResponse.premium_guild_since)
    }).catch((err) => {
        console.log(err)
    })
}).catch((err) => {
    console.log(err)
})

fetch("https://api.github.com/users/M4rdokBinary/repos").then((res) => {
    res.json().then((jsonResp) => {
        let repos = document.querySelector("#profile")
        const list = document.createElement("ul")
        jsonResp.forEach((repo) => {
            const item = document.createElement("li")
            const link = document.createElement("a")
            link.href = repo.html_url
            link.textContent = repo.full_name
            if (!repo.fork) {
                item.appendChild(link)
                list.appendChild(item)
            }
        })
        repos.appendChild(list)
    }).catch((err) => {
        console.log(err)
    })
}).catch((err) => {
    console.log(err)
})
