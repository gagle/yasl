import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8'
  },
  tabsIndicator: {
    backgroundColor: theme.palette.primary.main
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    '&:hover': {
      opacity: 1
    },
    '&$tabSelected': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  tabSelected: {}
});

class Sections extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, names = [] } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
          {names.map(name => (
            <Tab
              key={name}
              disableRipple
              classes={{ root: classes.tabRoot }}
              label={name.toUpperCase()}
            />
          ))}
        </Tabs>
      </div>
    );
  }
}

Sections.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sections);
