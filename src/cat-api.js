import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_Tlbxe1aRXJVaHd8QBKjoVnYxKC3iqKiKSylUtEqg5b3OPFvSUEHmPCslrQRBIcPO"
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {  
    return axios.get('/breeds')
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error (response.statusText || "Упс! Щось пішло не так")
            }
            return response;
        })
        
}

function fetchCatByBreed(breedId) {   
    return axios.get(`/images/search?breed_ids=${breedId}`)
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error (response.statusText || "Упс! Щось пішло не так")
            }
            return response;
        })
}

export { fetchBreeds, fetchCatByBreed }