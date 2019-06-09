import React from 'react';

export default class extends React.Component {
    state = {
        visibility: true
    };
    onExpanderClick = () => {
        this.setState((state) => ({visibility: !state.visibility}), () => console.log(this.state.visibility));
    }
      render() {
          return (
              <>
                <form onSubmit={this.props.onSubmit} className="filterForm">
                    <button className={`filterExpander ${(!this.state.visibility) ? 'expanderRotate' : ''}`} onClick={this.onExpanderClick} type="button">
                        <svg width="60" height="19" viewBox="0 0 223 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.99826 2.3L221.998 1M38.9979 37.3L182.013 37" stroke="#24CAD3" strokeWidth="10"/>
                        </svg>
                    </button>
                    <div className={`expandableMenu ${(this.state.visibility) ? 'expanderVisible' : 'expanderExpanded'}`}>
                        <label className="filterLabel">
                            <span>Город</span>
                            <input type='text' name="city" value={this.props.city} onChange={this.props.onChange} className="filterInput" required/>
                        </label>
                        <label className="filterLabel">
                            <span>Категория</span>
                            <input type='text' name="type" value={this.props.type} onChange={this.props.onChange} className="filterInput"/>
                        </label>
                        <button type="submit" 
                                className={`filterSubmit`}
                        >Поиск</button>
                    </div>
                </form>
                <style jsx>{`
                    .filterForm {
                        display: flex;
                        flex-direction: column;
                        background: white;
                        border-radius:1rem;
                        font-size: 1.6rem;
                        overflow: hidden;
                        min-width: 17vw;
                        position: absolute;
                        top: 4rem;
                        right: 4rem;
                        z-index: 5555;
                        box-shadow: 0 1px 11px 0;
                    }

                    .expandableMenu {
                        display: flex;
                        flex-direction: column;
                        margin-top: auto;
                    }

                    .filterInput {
                        background: #FAFAFA;
                        padding: .5rem;
                        border: 1px solid #999;
                        font-size: 1.6rem;
                        color: #000;
                        border-radius: 4px;
                    }

                    .filterLabel {
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 2rem;
                        margin-left:2rem;
                        margin-right: 2rem;
                    }
                    .filterLabel > span {
                        margin-bottom: .5rem;
                        cursor: pointer;
                    }
                    .filterLabel:first-child {
                        margin-top: 3rem;
                    }
                    .filterSubmit {
                        margin-top: auto;
                        padding: 2rem;
                        font-size: 2rem;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: white;
                        background: #24CAD3;
                        border: none;
                        outline: none;
                        cursor: pointer;
                    }
                    .filterSubmit:hover, .filterSubmit:active {
                        background: #2DBBC2;
                    }
                    .filterExpander {
                        border: none;
                        width: 100%;
                        padding: 1rem 0;
                        background: transparent;
                        cursor: pointer;
                        overflow: hidden;
                        transform: rotateX(-180deg);
                        transition: transform .5s ease-in-out;
                    }
                    .filterExpander > * {
                        pointer-events: none;
                    }
                    .filterExpander.expanderRotate {
                        transform: rotateX(0);
                    }
                    .expanderVisible {
                        max-height: 70rem;
                        transition: max-height .5s ease-in-out;
                    }

                    .expanderExpanded {
                        max-height: 0;
                        transition: max-height .5s ease-in-out;
                    }
                `}</style>
            </>
          );
      }
}