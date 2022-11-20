
const getUserRepositories = async (data) => {
    return fetch(`${data}`)
        .then((response) => response.json())
        .then((repos) => {
                console.log(repos)
                drawRepositoriesList(repos)
            }
        );
};
