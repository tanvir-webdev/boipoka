const getStoredData = ()=>{
    const storedBook = localStorage.getItem("readList");

    if(storedBook){
        const storedBookToParse = JSON.parse(storedBook);
        return storedBookToParse
    }
    else{
        return [];
    }
}


const addToStoredDb = (id)=> {
    const storedBookData = getStoredData();
    if(storedBookData.includes(id)){
        alert('Already Exist')
    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }
}

export {addToStoredDb};