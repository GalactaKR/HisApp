import React from 'react'
import { Card } from 'semantic-ui-react'

class EventCardLarge extends React.Component {

    render(){
        const props = this.props
        console.log(props)
        const title = props.title
        const image = props.image
        const text = props.text

        return <Card
            image={image}
            header={title}
            meta='Friend'
            description={text}

        />
    }
}

export default EventCardLarge