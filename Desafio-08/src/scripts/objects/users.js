
const user = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    repositories: [],
    followersUrl:[] ,
    followingUrl:[] ,
    events:[],

    setInfo(gitHubUser){

        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setFollowers(followersUrl){
        this.followersUrl = followersUrl
    },
    setFollowings(followingUrl){
        this.followingUrl = followingUrl
    },
    setEvents(events){
        this.events = events
    }
}
export{ user }