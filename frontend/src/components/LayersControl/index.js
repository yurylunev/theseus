import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <>
                <div className="LayersControl">
                    <button className={`LayersControlHeat ${(this.props.curLayer === 'heat') ? 'active' : ''}`} name="heat" onClick={(e) => this.props.onClick(e)}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.21738 39L5.11436 19.3158H32.8877L38.6644 39H1.21738Z" stroke="black" strokeWidth="2"/>
                            <path d="M13.8123 34.7368C11.8819 29.9196 12.9099 27.1592 14.3936 24.5586C16.0184 21.7105 16.4371 18.8913 16.4371 18.8913C16.4371 18.8913 17.7143 20.8826 17.2034 23.997C19.4598 20.9846 19.8857 16.1852 19.5449 14.3471C24.6453 18.6217 26.8251 27.8774 23.8875 34.7368C39.5119 24.135 27.7739 8.27132 25.7304 6.48437C26.4116 8.27126 26.5408 11.2963 25.1647 12.7644C22.8353 2.17103 17.0757 0 17.0757 0C17.7569 5.46304 14.6065 11.4369 11.5685 15.9006C11.4618 13.7222 11.3484 12.219 10.3932 10.1344C10.1788 14.0917 7.65708 17.3175 6.9742 21.2824C6.04921 26.6519 7.66707 30.5833 13.8123 34.7368Z" fill="black"/>
                        </svg>
                    </button>
                    <button className={`LayersControlPolygons ${(this.props.curLayer === 'poly') ? 'active' : ''}`} name="poly" onClick={(e) => this.props.onClick(e)}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H39V39H1V1Z" stroke="black" strokeWidth="2"/>
                            <path d="M9.71521 12.311L20 7.23072L30.2848 12.311L32.8433 23.8087L25.6972 33H14.3028L7.15673 23.8087L9.71521 12.311Z" stroke="black" strokeWidth="4"/>
                        </svg>
                    </button>
                </div>
                <style jsx>{`
                    .LayersControl {
                        position: absolute;
                        height: 13rem;
                        width: 5rem;
                        bottom: 6rem;
                        left: 0;
                        z-index: 99999;
                        background: #fff;
                        border-radius: 0 3px 3px 0;
                        box-shadow: 0 1px 16px -1px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .LayersControl > button {
                        margin-top: 1.5rem;
                        background: transparent;
                        border-radius: 3px;
                        border: none;
                    }
                    .LayersControl > button > * {
                        pointer-events: none;
                    }
                    .LayersControl > button.active {
                        background: #E5E5E5;
                    }

                `}</style>
            </>
        ); 
    }
}