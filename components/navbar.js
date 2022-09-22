'use strict';

const e = React.createElement;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home: true };
  }

  render() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle info">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className={this.props.home ? "bordered" : null}><a href="index.html"><i className="fa-solid fa-house"></i>&nbsp;Home</a></li>
                        {/*<li className={this.props.downloads ? "bordered" : null}><a href="downloads.html"><i className="fa-solid fa-download"></i>&nbsp;Downloads</a></li>*/}
                        <li className={this.props.wiki ? "bordered" : null}><a href="https://github.com/stock-linux/wiki/wiki" target="_blank"><i className="fa-brands fa-wikipedia-w"></i>&nbsp;Wiki</a></li>
                        <li className={this.props.about ? "bordered" : null}><a href="about.html"><i className="fa-solid fa-circle-info"></i>&nbsp;About</a></li>
                        <li><a href="https://discord.gg/aPSEDKYf98" target="_blank"><i class="fa-brands fa-discord"></i>&nbsp;Discord</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">Stock Linux: The Real Power-User Experience</a>
            </div>
            <div className="navbar-end">
                <img className="rounded-full h-10 object-contain" src="img/logo.png"/>
            </div>
        </div>
    );
  }
}

const domContainer = document.querySelector('#navbar');
if(document.location.pathname.endsWith('index.html'))
    ReactDOM.render(<NavBar home='true' />, domContainer);
else if(document.location.pathname.endsWith('downloads.html'))
    ReactDOM.render(<NavBar downloads='true' />, domContainer);
else if(document.location.pathname.endsWith('wiki.html'))
    ReactDOM.render(<NavBar wiki='true' />, domContainer);
else if(document.location.pathname.endsWith('about.html'))
    ReactDOM.render(<NavBar about='true' />, domContainer);