import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from '@reach/router';
import { Container, FormControl, InputGroup, Button, Row, Card } from 'react-bootstrap';
import "../App.css";


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;


const TrackSearch = () => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    async function search() {
        console.log("Searching for " + searchInput);

        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

        var artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id })

        var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums' + '?include_groups=album&market_US&limit=50', searchParameters)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAlbums(data.items);
            });

    }

    return (
        <div>
            <div>
                <h2>Search for Artist Albums</h2>

                <Container>
                    <InputGroup className="mb-3" size="lg">
                        <FormControl 
                            placeholder="Search for Artist"
                            type="input"
                            onKeyPress={e => {
                                if (e.key == "Enter") {
                                    search();
                                }
                            }}
                            onChange={(e) =>setSearchInput(e.target.value)}
                        />
                        <Button onClick={search} id="searchBtn">Search</Button>
                    </InputGroup>
                </Container>

                
                <Container>
                    <Row className="mx-2 row row-cols-6">
                        {albums.map((album, index) => {
                            return (

                                <Card>
                                    <Card.Img src={album.images[0].url}></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{album.name}</Card.Title>
                                    </Card.Body>
                                </Card>
                            )
                        })}

                    </Row>
                </Container>

            </div>
        </div>



    );
}

export default TrackSearch;























