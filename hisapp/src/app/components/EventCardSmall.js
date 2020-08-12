import React from 'react'
import{Button, Card, Image} from 'semantic-ui-react'

class EventCardSmall extends React.Component{
    render(){
        const props = this.props
        const title = props.title
        const factions = props.factions
        return <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://picsum.photos/100'
          />
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{factions}</Card.Meta>
        </Card.Content>
      </Card>
      
    }
}

export default EventCardSmall