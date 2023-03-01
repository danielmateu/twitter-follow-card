import React, { useState } from 'react'


export const TwitterFollwCard = ({ formatUserName, userName, name, img }) => {

    const [isFollowing, setIsFollowing] = useState(false)
    // const addAt = (userName) => `@${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={img} alt='El avatar de Dani'
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    {/* <span>{addAt(userName)}</span> */}
                    <span>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside className='tw-followCard-aside'>
                <button
                    className={buttonClassName}
                    onClick={handleClick}
                >
                    
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
