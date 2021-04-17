import React, { useState, useEffect } from 'react';
import './App.css';
import youtube from './apis/youtube';

import SearchBar from './components/SearchBar.component';
import VideoList from './components/VideoList.component';
import VideoDetail from './components/VideoDetail.component';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchTermSubmit('');
    }, []);

    const onSearchTermSubmit = async (searchString) => {
        const response = await youtube.get('/search', {
            params: { q: searchString },
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return (
        <div className='App ui container'>
            <SearchBar onFormSubmit={onSearchTermSubmit} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
