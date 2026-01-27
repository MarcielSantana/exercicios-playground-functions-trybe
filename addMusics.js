// 3 - Crie uma função que adiciona músicas em uma playlist

function addMusics(artistName, musicName, musicTime){
    let playlist = []
    playlist.push({
            artist: artistName,
            music: musicName,
            Time: musicTime
        })
        
        console.log(playlist);
        
}

addMusics('Survivor', 'Eye of the Tiger', 2.62)
addMusics('Frejat', 'Amor pra Recomeçar', 3.48)
addMusics('Teatro Mágico', 'É Ela', 3.43)