import React, {useEffect, useState} from 'react';
import styles from "../App.module.css";
import axios from 'axios';
import Loader from "../components/Loader";
import CatBlock from "../components/CatBlock";

const Home = () => {
    const [cats, setCats] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    const scrollHandler = (e) => {
        let scrollHeight = e.target.documentElement.scrollHeight;
        let scrollTop = e.target.documentElement.scrollTop;
        let innerHeight = window.innerHeight;
        if (scrollHeight - (scrollTop + innerHeight) < 100) {
            setFetching(true);
        }
    };

    useEffect(() => {
        if (fetching) {
            (async () => {
                try {
                    await axios.get('https://api.thecatapi.com/v1/images/search', {
                        headers: {
                            'x-api-key': '0306350b-aa7d-44e8-83f9-46cffd538652',
                        },
                        params: {
                            'limit': 25,
                        }
                    }).then(res => {
                        setCats([...cats, ...res.data]);
                        setIsLoading(false);
                        setCurrentPage(prevState => prevState + 1);
                    }).finally(() => setFetching(false));
                } catch (error) {
                    console.error(error);
                }
            })();
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }
    });

    const addToFavorites = (id) => {
        let axios = require('axios');
        let data = {'image_id': id};
        let config = {
            method: 'post',
            url: 'https://api.thecatapi.com/v1/favourites',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '0306350b-aa7d-44e8-83f9-46cffd538652'
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        alert('Вы поставили лайк котику!!!');
    }
    return (
        <div>
            <div className={styles.content}>
                <div className={styles.cats}>
                    {isLoading ? [...Array(15)].map((item, id) => <Loader key={id}/>)
                        : cats.map(item => <CatBlock key={item.id} {...item} addToFavorite={addToFavorites}/>)}
                </div>
            </div>
            {
                fetching && <div className={styles.footer}>
                    <div className={styles.footerContent}>
                        <h4>Следующие котики загружаются...</h4>
                        <img className={styles.catLoader} src={'./img/catLoader.gif'} alt={'cats are loading...'}/>
                    </div>
                </div>
            }

        </div>
    );
};

export default Home;