class UI {
    constructor() {
        this.profile = document.querySelector('#profile')
    }

    // show user profile
    showProfile(user) { 
        this.profile.innerHTML = `    
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${user.avatar_url}" alt="user image" class="img-fluid mb-2">
                            <a href="${user.html_url}" target="_blank" class="btn btn-outline-info btn-block">View Profile</a>
                        </div>

                        <div class="col-md-9 mt-3 mt-sm-0">
                            <span class="badge badge-primary p-3 my-2 my-sm-0">Name: ${user.name}</span>
                            <span class="badge badge-primary p-3 my-2 my-sm-0">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-primary p-3 my-2 my-sm-0">Public Gists: ${user.public_gists}</span>
                            <span class="badge badge-primary p-3 my-2 my-sm-0">Followers: ${user.followers}</span>
                            <span class="badge badge-primary p-3 my-2 my-sm-0 ">Following: ${user.following}</span>

                            <ul class="list-group mt-4">
                                <li class="list-group-item">Company: <span class="ml-2">${user.company}</span></li>
                                <li class="list-group-item">Website/Blog: <span class="ml-2">${user.blog}</span></li>
                                <li class="list-group-item">Location: <span class="ml-2">${user.location}</span></li>
                                <li class="list-group-item">Member Since: <span class="ml-2">${user.created_at}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="page-heading mt-4 mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `     
    }

    // show user repos
    showRepos(repos) {
        let output = ''
        repos.forEach(repo => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="${repo.html_url}" target="_blank" class="text-white">${repo.name}</a>
                            </div>

                            <div class="col-md-6 mt-2 mt-sm-0 text-sm-right">
                                <span class="badge badge-primary p-2">Star: ${repo.stargazers_count}</span>
                                <span class="badge badge-primary p-2">Watchers: ${repo.watchers_count}</span>
                                <span class="badge badge-primary p-2">Forks: ${repo.forks_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
        document.querySelector('#repos').innerHTML = output
    }
    
    // if user not found
    showAlert(message, className) {
        // clear any alert present
        this.clearAlert()

        const div = document.createElement('div')
        div.className = className;

        div.appendChild(document.createTextNode(message))

        const container = document.querySelector('.search-container')
        const search = document.querySelector('.search')

        container.insertBefore(div, search)

        // remove alert after 3s
        setTimeout(() => {
            this.clearAlert()
        }, 3000)
    }

    // do not duplicate alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert')
        if(currentAlert) {
            console.log(alert.innerHTML)
            currentAlert.remove()
        }
    }

    // if userTest empty
    clearProfile() {
        this.profile.innerHTML = ''
    }
}