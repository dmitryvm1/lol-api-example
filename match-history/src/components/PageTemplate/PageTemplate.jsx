import React from 'react'
import './PageTemplate.scss';

/**
 * props.logo - "League Observer"
 * props.logoShort - "L O"
 * props.nav = [{title: "About", href: "/about"}, {title: "Blog", href: "/"},]
 * props.content = react.element
 */
export class PageTemplate extends React.Component {
    constructor() {
        super()
    }

    render() {
        const {logo, logoShort, nav, children} = this.props
        const navItems = nav.map((i, idx) => {
            return <li key={String(idx)}><a href={i.href}>{i.title}</a></li>
        })
        return (
            <React.Fragment>
                <header className="header">
                    <a href="#" className="logo logo-sm">{logoShort}</a>
                    <a href="#" className="logo logo-l">{logo}</a>

                    <input className="side-menu" type="checkbox" id="side-menu" />
                    <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>

                    <nav className="nav">
                        <ul className="menu">
                            {navItems}
                        </ul>
                    </nav>
                </header>

                <main>
                    {children}
                </main>
                <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-links">
                            <p className="">
                                <a href="/" target="_self" rel="home" aria-current="page">{logo}</a>
                            </p>
                            <p>
                                <a href="/privacy-policy" data-id="/privacy-policy" target="_blank" rel="noreferrer noopener">Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

