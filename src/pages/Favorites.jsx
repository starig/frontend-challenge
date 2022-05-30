import React, {useEffect, useState} from 'react';
import styles from "../App.module.css";
import axios from 'axios';
import CatBlockFavorite from "../components/CatBlockFavorite";
import Loader from "../components/Loader";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                await axios.get('https://api.thecatapi.com/v1/favourites', {
                    headers: {
                        'x-api-key': '0306350b-aa7d-44e8-83f9-46cffd538652',
                    }
                }).then(res => {
                    setFavorites(res.data);
                });
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const removeFromFavorite = (id) => {
        axios.delete(`https://api.thecatapi.com/v1/favourites/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '0306350b-aa7d-44e8-83f9-46cffd538652',
            }
        }).then(res => {
            setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        });
        alert('Вы удалили котика из любимых :(');
    }
    return (isLoading ? <div>
            <div className={styles.content}>
                <div className={styles.favorites}>
                    {[...Array(10)].map((item, id) => <Loader key={id}/>)}
                </div>

            </div>
        </div> : <div>
            {favorites.length == 0 && <div className={styles.content}>
                <div>Вы не лайкнули ни одного котика :(</div>
            </div>}
            <div className={styles.content}>
                <div className={styles.cats}>
                    {favorites.map(item => <CatBlockFavorite key={item.id} {...item} url={item.image.url} favoriteStatus={true}
                                                             removeFromFavorite={removeFromFavorite}/>)}
                </div>

            </div>
        </div>
    );
};

export default Home;