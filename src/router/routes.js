
export default [
	{
		path: '/',
		component: () => import('layouts/default'),
		children: [
			{ path: '', component: () => import('pages/index') }
		]
	},
	{
		path: '/signup',
		component: () => import('layouts/default'),
		children: [
			{path: '', component: () => import('pages/signup')}
		]
	},
	{
		path: '/login',
		component: () => import('layouts/default'),
		children: [
			{path: '', component: () => import('pages/login')}
		]
	},
	{
		path: '/demos',
		component: () => import('layouts/default'),
		children: [
			{path: '', component: () => import('pages/demos')}
		]
	},
	
	{ // Always leave this as last one
		path: '*',
		component: () => import('pages/404')
	}
]
