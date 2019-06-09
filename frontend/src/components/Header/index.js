import React from 'react';

export default () => {
    return (
        <>
            <div className="header">
                <div className="layoutWrapper flex">
                    <div className="headerLogo">
                        <span>Theseus</span>
                    </div>
                    <div className="theseus">
                        <img src="theseus.png" alt="theseus" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .header {
                    background: linear-gradient(to right, #B3FAAD, #03C9D4 60%, #68DFDC 100%);
                    box-shadow: 0 1px 1.2rem;
                    padding: 3rem 0;
                    font-size: 1.6rem;
                    z-index: 9999;
                    position: relative;
                }
                .headerLogo {
                    padding-left: 2rem;
                }
                .headerLogo  > span {
                    font-size: 3.4rem;
                    font-weight: 600;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: .5rem;
                    font-style: italic;
                    text-shadow: 1px 1px 4px #000;
                }
                .theseus > img  {
                    position: absolute;
                    height: 17.4rem;
                    right: 2rem;
                    top: -0.8rem;
                }
            `}</style>
        </>
    );
};