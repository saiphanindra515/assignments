let SeasonNumber = parseInt(window.prompt("enter season number"))
let episodeNumber = parseInt(window.prompt("enter episode number"))
	
    let episodeInformation = (SeasonNumber,episodeInformation) =>{


	 for(let i =0 ; i<Dataset._embedded.episodes.length;i++)
	 {    
		 if(Dataset._embedded.episodes[i].season==SeasonNumber && Dataset._embedded.episodes[i].number==episodeNumber)  // 1st problem
		 {
			 
			 console.log(Dataset._embedded.episodes[i])
		      break
	
	     }

	}
}
episodeInformation(SeasonNumber,episodeNumber)