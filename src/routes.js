import Store from './components/Store.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductDetails from './components/ProductDetails.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Vue from 'vue'
import Auth from '@okta/okta-vue'


Vue.use(Auth, {
	issuer: 'https://dev-460437.okta.com/oauth2/default',
	client_id: '0oaosyrpzbrsWVMyH356',
	redirect_uri: 'http://localhost:8080/implicit/callback',
	scope: 'openid profile email'
  })

export const routes = [
	{path: '/', component: Store, name: 'mainpage'},
	{path: '/product/:id', component: ProductDetails, name: 'product'},
	{path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
	{path: '/login', component: Login, name: 'login', onlyGuest: true },
	{path: '/register', component: Register, name: 'register', onlyGuest: true},
	{path: '*', redirect: '/' }
];