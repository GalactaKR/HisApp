import React from 'react'
import{Button, Card, Image} from 'semantic-ui-react'

class PersonCardSmall extends React.Component{
    render(){
        const props = this.props
        const name = props.name
        const title = props.title
        return <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://picsum.photos/100'
          />
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{title}</Card.Meta>
        </Card.Content>
      </Card>
      
    }
}

export default PersonCardSmall

{/* <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card> */}