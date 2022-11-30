function example (str, search){
    let strLower = str.toLowerCase()
    let searchLower = search.toLowerCase()
    let count = 0;
    for(let i = 0; i < strLower.length; i++){
        let len = 0;
        let text = strLower[i];
        for(let j = 1; j < searchLower.length; j++){
            text += strLower[i + j];
        }

        for(let k = 0; k < text.length; k++){
            if(searchLower.includes(text[k])) {
                len++;
            }
        }

        if(text.length == len){
            count++;
            i += searchLower.length - 1;
        }
    }
    console.log(count);
}

example('therearemanyTREEsinthegardenTREEnow', 'tree');
example('theREaREmanytREesinthegardentREenow', 're');