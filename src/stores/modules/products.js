const state = {
	isLoading: true,
	productList1: [
		{
			id: 1,
			title: 'Vue Tutorial',
			thumbnail_url: 'src/assets/vue.png',
			price: 400,
		
		},{
			id: 2,
			title: 'Angular tutorial',
			thumbnail_url: 'src/assets/Angular.png',
			price: 300,
		
			
		},{
			id: 3,
			title: 'Nodejs tutorial',
			thumbnail_url: 'src/assets/nodejs.png',
			price: 20,
		
		},{
			id: 4,
			title: 'java tutorial',
			thumbnail_url: 'src/assets/java.png',
			price: 100,
		
		},
	]
}

const mutations = {
	'UPDATE_PRODUCT_LIST' (state, productList) {
		state.productList = productList;
		state.isLoading = false;
	}
}

const actions = {

}

const getters = {
	products: (state) => {
		return state.productList1;
	},
	isProductLoading: (state) => {
		return state.isLoading;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}