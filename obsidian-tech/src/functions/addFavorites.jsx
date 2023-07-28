import { AddFavoriteProduct } from "../services/user_service"

export function addFavorites(userId, productId, token){
	if(!(userId, productId, token) === null || !(userId, productId, token) === undefined || !(userId, productId, token) === ""){
		AddFavoriteProduct({
			userId:userId,
			productId: productId,
			token:token
		})
		.then(res => console.log(res))
		.catch(err => console.log(err))
	}
}