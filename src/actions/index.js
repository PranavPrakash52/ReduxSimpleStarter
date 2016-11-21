export function selectbook(number){
	return({
		type:'BOOK_SELECTED',
		payload:number

	});
}