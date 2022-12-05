import React from 'react';
import './Header.scss';

export function Header() {
    return (
        <div className="wp-block-template-part">
            <header className='site-block'>
                <div className="block-container">
                    <div className="block-content">
                        <div><a href='/' className="blog-link">Read The Blog</a></div>
                        <div><a href='/app/matches'>Match History</a></div>
                        <div><a href='/app/masters'>Explore Champion Masters</a></div>
                    </div>
                </div>
            </header>
        </div>
    )
}