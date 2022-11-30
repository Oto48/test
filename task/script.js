function example (str, search){
    let strLower = str.toLowerCase()
    let searchLower = search.toLowerCase()
    let count = 0;
    for(let i = 0; i < strLower.length; i++){
        let text = '';
        let len = 0;
        for(let j = 0; j < searchLower.length; j++){
            for(let k = 0; k < searchLower.length; k++){
                if(searchLower[k] == strLower[i + j]){
                    text += strLower[i + j];
                    len++;
                    break;
                }
            }
            
            if(len == searchLower.length){
                count++;
                i += searchLower.length - 1;
            }
        }
    }
    console.log(count);
}

example('therearemanyTREEsinthegardenTREEnow', 'tree');
example('theREaREmanytREesinthegardentREenow', 're');
