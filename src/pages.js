class pages{
    static loadPage(page){
        return fetch(`${page}.html`)
        .then(response => response.text())
    }

    static async pageLoaded(url){
        const thisPage = await this.loadPage(url)
        document.querySelector('#content').innerHTML = thisPage
    }
}

export default pages