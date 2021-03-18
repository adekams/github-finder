class Github {
    constructor() {
        this.clientId = config.CLIENT_ID
        this.clientSecret = config.CLIENT_SECRET
        this.repos_count = 7
        this.repo_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)

        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        return {
            profile,
            repos
        }
    }
}