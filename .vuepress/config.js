module.exports ={
	title:'hello VuePress',
	description:'Just for fun',
	themeConfig: {
	    nav: [
	      	{ text: 'Home', link: '/' },
	      	{ text: 'Guide', link: '/guide/' },
	      	{ text: 'Blog', link: '/Blog/' },
	      	{ text:'Languages', items:[{text:'English',link:'/guide/'},{text:'中文',link:'https://google.com'}]}
	    ]
  	},
  	configureWebpack: {
	    resolve: {
	      	alias: {
	        	'@alias': 'public'
	      	}
	    }
  	},
  	serviceWorker:true,
  	port:8848
}
