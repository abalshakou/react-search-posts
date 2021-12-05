import {useState, useEffect} from 'react';
import {RegularList} from "./RegularList";
import {CardList} from "./CardList";
import 'tachyons';

export const SearchBox = ({searchChange}) => {

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const [searchField, setSearchField] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    const filteredPosts = posts.filter(post => {
        return post.title.toLowerCase().includes(searchField.toLowerCase());
    }, [])

    return (
        <>
            <div className='fl w-100 pa5'>
                <input type="text" name='search' placeholder='type name here'
                       className=' fl w-100 ba b--black-20 pa2 mb2 db searchField' onChange={onSearchChange}/>

                <RegularList
                    items={searchField ? filteredPosts : posts}
                    resourceName="post"
                    itemComponent={CardList}/>
            </div>
        </>
    );
}