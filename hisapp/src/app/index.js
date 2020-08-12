import React from "react";
import PersonCardLarge from './components/PersonCardLarge'
import EventCardLarge from './components/EventCardLarge'
import PersonCardSmall from './components/PersonCardSmall'
import EventCardSmall from './components/EventCardSmall'
import { Card } from "semantic-ui-react";


class App extends React.Component {
    render() {
        return <Card.Group itemsPerRow={3}>
        <EventCardSmall
            title = "The Battle of Red Cliffs"
            factions = "Wei,Shu,Wu"
        />
        <EventCardSmall
            title = "Battle of Guandu"
            factions = "Cao,Yuan"
        />
        <EventCardSmall
            title = "Battle of Yiling"
            factions = "Wu,Shu"
        />
        <PersonCardSmall
            name = "Cao Cao"
            title = "Emperor Wu"
        /> 
        <PersonCardSmall
            name = "Liu Bei"
            title = "Emperor Zhaolie"
        />
        <PersonCardSmall
            name = "Sun Quan"
            title = "Emperor Da of Wu"
        />
        <PersonCardLarge
            name = "Cao Cao"
            birthDate = {new Date()}
            deathDate = {new Date()}
            text = "sth sth sth sth sth sth sth"
            tags = {["tag1","tag2","tag3"]}
            image = "https://picsum.photos/200/200"
            id = {1111}
        />    
        <PersonCardLarge
            name = "Liu Bei"
            birthDate = {new Date()}
            deathDate = {new Date()}
            text = "sth sth sth sth sth sth sth"
            tags = {["tag1","tag2","tag3"]}
            image = "https://picsum.photos/200/200"
            id = {2222}
        />    
        <PersonCardLarge
            name = "Sun Quan"
            birthDate = {new Date()}
            deathDate = {new Date()}
            text = "sth sth sth sth sth sth sth"
            tags = {["tag1","tag2","tag3"]}
            image = "https://picsum.photos/200/200"
            id = {3333}
        />    


<EventCardLarge
    title = "The Battle of Red Cliffs"
    startDate = {new Date()}
    endDate = {new Date()}
    text = "sth sth sth sth sth sth sth"
    Factions = {["F1","F2","F3"]}
    image = "https://picsum.photos/200/200"
    id = {1111}
/>    
<EventCardLarge
    title = "Battle of Guandu"
    birthDate = {new Date()}
    deathDate = {new Date()}
    text = "sth sth sth sth sth sth sth"
    tags = {["F1","F2","F3"]}
    image = "https://picsum.photos/200/200"
    id = {2222}
/>    
<EventCardLarge
    title = "Battle of Yiling"
    birthDate = {new Date()}
    deathDate = {new Date()}
    text = "sth sth sth sth sth sth sth"
    tags = {["F1","F2","F3"]}
    image = "https://picsum.photos/200/200"
    id = {3333}
/>    
    </Card.Group>
    }


}
       
        
export default App


