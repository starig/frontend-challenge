import React, {useState} from 'react';
import styles from "../App.module.css";

const CatBlock = ({id, url, addToFavorite, favoriteStatus}) => {
    const [isFavorite, setIsFavorite] = useState(favoriteStatus);


    const imgSrc = isFavorite ? "./img/heartOrange.png" : "./img/heartWhite.png";
    return (
        <div className={styles.catBlock}>
            <img src={url} alt="cat!!!!" className={styles.catImg}/>
            <img src={imgSrc} onMouseOver={e => (e.currentTarget.src = "./img/heartOrange.png")}
                 onMouseLeave={e => (e.currentTarget.src = "./img/heartWhite.png")}
                 alt="heart" className={styles.heartImg} onClick={() => addToFavorite(id)}/>
        </div>
    );
};

export default CatBlock;