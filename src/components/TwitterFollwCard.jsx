import React from 'react'


export const TwitterFollwCard = ({formatUserName, userName, name, img, isFollowing}) => {
    // const addAt = (userName) => `@${userName}`

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
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
