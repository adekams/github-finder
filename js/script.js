const github = new Github
const ui = new UI

// search input 
const searchUser = document.querySelector("#searchUser")

searchUser.addEventListener('keyup', (e) => {
    const userTest = e.target.value

    if(userTest && userTest !== '') {
        github.getUser(userTest)
        .then(data => {
            if(data.profile.message === "Not Found") {
                ui.showAlert('User not found', 'alert alert-danger')            
            } else {
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
                console.log(data)
            }         
        })
    }else {
        ui.clearProfile()
    }
})