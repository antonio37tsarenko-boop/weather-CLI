const getArgs = (args) => {
    const res = {};
    const [ , , ...rest ] = args;

    rest.forEach((item, index, arr) => {
        if(item.startsWith('-')){
            if(index + 1 === arr.length){
                res[item.substring(1)] = true
            }

            else if(!arr[index + 1].startsWith('-')){
                res[item.substring(1)] = arr[index + 1];

            }else res[item.substring(1)] = true
        }
    })
    return res
}

export {getArgs}