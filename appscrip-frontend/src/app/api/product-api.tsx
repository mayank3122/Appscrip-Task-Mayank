export const Products = async()=>{
    const url = "https://fakestoreapi.com/";

    const API_URL = `${url}products`;
    try {
        const response = await fetch(API_URL, {
            method: "GET",
        });
        const productData = await response.json();

        return productData;
    } catch (e) {
        console.log(e)
    }
}