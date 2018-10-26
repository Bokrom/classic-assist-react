import React from 'react';
import { Container, Table, Header, Loader, Pagination } from 'semantic-ui-react';
import { EquipmentLocal } from '../../api/equipment/client/equipment';
import EquipmentItem from '/imports/ui/components/EquipmentItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

class ListEquipment extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

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

ListEquipment.propTypes = {
  equipments: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};

export default withTracker(() => {
  return {
    equipments: EquipmentLocal.find({}, { limit: 100 }).fetch(),
    ready: true
  };
})(ListEquipment);
