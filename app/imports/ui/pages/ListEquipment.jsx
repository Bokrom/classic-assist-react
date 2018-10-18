import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Pagination } from 'semantic-ui-react';
import { Equipments } from '/imports/api/equipment/equipment';
import EquipmentItem from '/imports/ui/components/EquipmentItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Equipment documents. Use <EquipmentItem> to render each row. */
class ListEquipment extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">List Equipment</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Quality</Table.HeaderCell>
                <Table.HeaderCell>Slot</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.equipments.map((equipment) => <EquipmentItem key={equipment._id} equipment={equipment} />)}
            </Table.Body>
          </Table>
          <Pagination defaultActivePage={1} totalPages={10} />
        </Container>
    );
  }
}

/** Require an array of Equipment documents in the props. */
ListEquipment.propTypes = {
  equipments: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Equipment documents.
  const subscription = Meteor.subscribe('Equipment');
  return {
    equipments: Equipments.find({}, {limit: 20}).fetch(),
    ready: subscription.ready(),
  };
})(ListEquipment);
