const ce = React.createElement;

const link = function(view, text){
		return ce("a", {style: styles.navLinks, href: "#", onClick: function(){
			ReactDOM.render(ce(view, null), document.getElementById("views"));
		}
	}, text);
};

const header = function(text){
	return ce("h1", {style: styles.pageHeaders}, text);
};

const styles = {
	navLinks: {
		"marginLeft": "40px",
		"color": "#777"
	},
	pageHeaders: {
	}
};

const NavBar = React.createClass({
	render: function(){
    	return ce("div", null,
			link(LandingPage, "home"),
			link(Deals, "deals"),
			link(About, "about")

		);
	}
});

const LandingPage = React.createClass({
	render: function(){
		return header("Dine Deal");
	}
});

const Deals = React.createClass({
	render: function(){
		return header("Deals");
	}
});

const About = React.createClass({
	render: function(){
		return header("About");
	}
});

window.onload = function(){
	ReactDOM.render(React.createElement(NavBar, null), document.getElementById("nav"));
	ReactDOM.render(React.createElement(LandingPage, null), document.getElementById("views"));
}