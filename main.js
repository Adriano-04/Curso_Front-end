document.addEventListener('DOMContentLoaded',function() {
    const name = document.querySelector('#profile-name')
    const avatar = document.querySelector('#profile-avatar')
    const userName = document.querySelector('#profile-username')
    const repos = document.querySelector('#repositories')
    const page = document.querySelector('#profile-link')
    const following = document.querySelector('#follow')
    const followers = document.querySelector('#followers')


    fetch('https://api.github.com/users/Adriano-04')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            name.innerHTML = json.name
            userName.innerHTML = json.login
            avatar.src = json.avatar_url
            repos.innerHTML = json.public_repos
            page.href = json.html_url
            following.innerHTML = json.following
            followers.innerHTML = json.followers
        })
})