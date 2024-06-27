const user = {
    avatarUrl:'',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories:[],
    events:[],

    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },

    setRepositories(gitRepositories){

        this.repositories = [];
        
        gitRepositories.forEach((repository)=>{
            this.repositories.push({name: repository.name, url: repository.html_url, forks: repository.forks_count, stars: repository.stargazers_count, watchers: repository.watchers_count, language: repository.language})
        })
    },

    setEvents(gitEvents){

       this.events = [];

       gitEvents.forEach((event)=>{

        if(event.type === "PushEvent"){
            this.events.push({type: event.type, name: event.repo.name, message: event.payload.commits[0].message})
        } else if (event.type === "CreateEvent"){
            this.events.push({type: event.type, name: event.repo.name, message: "Sem mensagem de commit"})
        }

       })
    }
}

export{user}