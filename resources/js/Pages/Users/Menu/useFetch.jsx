import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])
console.log(foods)
    useEffect(() => {
        fetch('https://res.awcbd.org/api/menus')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [foods])
    return [foods, setFoods]
}

export default useFetch