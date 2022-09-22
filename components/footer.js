'use strict';

const e = React.createElement;
let changeLocation = (loc)=>{window.location = loc;};
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { home: true };
    }

    render() {
        return (
            <div class="btm-nav">
                <button class={this.props.home ? "active" : null}>
                    <a href="index.html" className="flex w-full h-full justify-evenly flex-col">
                        <i class="fa-solid fa-house"></i>
                        <span class="btm-nav-label">Home</span>
                    </a>
                </button>
                {/*<button class={this.props.downloads ? "active" : null}>
                    <a href="downloads.html" className="flex w-full h-full justify-evenly flex-col">
                        <i class="fa-solid fa-download"></i>
                        <span class="btm-nav-label">Downloads</span>
                    </a>
                    
        </button>*/}
                <button class={this.props.wiki ? "active" : null}>
                    <a href="https://github.com/stock-linux/wiki/wiki" target="_blank" className="flex w-full h-full justify-evenly flex-col">
                        <i class="fa-brands fa-wikipedia-w"></i>
                        <span class="btm-nav-label">Wiki</span>
                    </a>
                </button>
                <button class={this.props.about ? "active" : null}>
                    <a href="about.html" className="flex w-full h-full justify-evenly flex-col">
                        <i class="fa-solid fa-circle-info"></i>
                        <span class="btm-nav-label">About</span>
                    </a>
                </button>
            </div>
        );
    }
}

const domContainer = document.querySelector('#footer');
if (document.location.pathname.endsWith('index.html'))
    ReactDOM.render(<Footer home='true' />, domContainer);
else if (document.location.pathname.endsWith('downloads.html'))
    ReactDOM.render(<Footer downloads='true' />, domContainer);
else if (document.location.pathname.endsWith('wiki.html'))
    ReactDOM.render(<Footer wiki='true' />, domContainer);
else if (document.location.pathname.endsWith('about.html'))
    ReactDOM.render(<Footer about='true' />, domContainer);