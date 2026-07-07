import React, { JSX } from 'react'
import { socialMediaList } from '../commonData/socialMediaData'


const SocialIcons = () => {
    return (
        <div className="social-container">
            {
                socialMediaList?.map(({ label, path, icon }) => (
                    <a key={label} href={path} className="social-btn" aria-label={label}>
                        {icon}
                    </a>
                )

                )
            }

        </div>
    )
}

export default SocialIcons