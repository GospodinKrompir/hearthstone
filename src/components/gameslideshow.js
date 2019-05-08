import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../scss/gameslideshow.scss';

class Slides extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            slideshow: this.props.images[0],
            slideIndex: 0
        };
        this.currentIndex = 0;
    }
    componentDidMount() {
        this._isMounted = true;
        let that = this;
        this.timeout = setTimeout(function () {
            that.goTo()
        }, 6000);
    }
    componentDidUpdate() {
        let that = this;
     
            this.timeout = setTimeout(function () {
                that.goTo()
            }, 6000);
        
    }
    goTo = () => {
        let index = 0;
        index = this.currentIndex + 1;
        this.currentIndex = index >= this.props.images.length ? 0 : index;
        this.setState({
            slideIndex: this.currentIndex,
            slideshow: this.props.images[this.currentIndex]
        });
    };
    componentWillUpdate(){
        clearTimeout(this.timeout);
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearTimeout(this.timeout);
    }
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={4000}
                transitionLeaveTimeout={4000}>
                <img key={this.currentIndex}
                    src={this.state.slideshow} alt={this.props.slide + this.currentIndex}></img>
            </ReactCSSTransitionGroup>
        );
    }
}

export default Slides

