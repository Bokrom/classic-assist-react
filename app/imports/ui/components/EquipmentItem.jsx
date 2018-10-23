import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class EquipmentItem extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.equipment.name}</Table.Cell>
        <Table.Cell>{this.props.equipment.quality}</Table.Cell>
        <Table.Cell>{this.props.equipment.inventoryType}</Table.Cell>
        <Table.Cell>{this.props.equipment.class}</Table.Cell>
      </Table.Row>
    );
  }
}

EquipmentItem.propTypes = {
  equipment: PropTypes.object.isRequired,
};

export default EquipmentItem;