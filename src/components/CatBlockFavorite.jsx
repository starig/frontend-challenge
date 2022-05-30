import React, {useState} from 'react';
import styles from "../App.module.css";

const CatBlockFavorite = ({id, url, addToFavorite, favoriteStatus, removeFromFavorite}) => {
    const [isFavorite, setIsFavorite] = useState(favoriteStatus);

    const imgSrc = isFavorite ? "./img/heartOrange.png" : "./img/heartWhite.png";
    return (
        <div className={styles.catBlock}>
            <img src={url} alt="cat!!!!" className={styles.catImg}/>
            {
                favoriteStatus ? <img src={imgSrc} onMouseOver={e => (e.currentTarget.src = "./img/heartWhite.png")}
                                      onMouseLeave={e => (e.currentTarget.src = "./img/heartOrange.png")}
                                      alt="heart" className={styles.heartImg} onClick={() => removeFromFavorite(id)}/>
                    : <img src={imgSrc} onMouseOver={e => (e.currentTarget.src = "./img/heartWhite.png")}
                          onMouseLeave={e => (e.currentTarget.src = "./img/heartOrange.png")}
                          alt="heart" className={styles.heartImg} onClick={() => addToFavorite(id)}/>
            }
        </div>
    );
};

export default CatBlockFavorite;