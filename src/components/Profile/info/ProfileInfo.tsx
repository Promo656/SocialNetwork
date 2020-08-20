import React from "react";
import s from './ProfileInfo.module.css'

export function ProfileInfo() {
    return (
        <div className={s.container}>
            <div className={s.BGPhotoContainer}>
                <img className={s.BGPhoto}
                     src="https://iqonic.design/themes/socialv/html/images/page-img/profile-bg1.jpg" alt=""/>
            </div>
            <div className={s.PhotoContainer}>
                <img className={s.Photo}
                     src="https://avatars.mds.yandex.net/get-pdb/1552679/d24a4f83-bab4-44f3-b759-67f08a41fe6e/s1200?webp=false"
                     alt=""/>
            </div>
        </div>
    )
}
