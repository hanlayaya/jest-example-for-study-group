import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Job from './Job';

export default class JobList extends Component {
  static propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      company: PropTypes.string,
    })),
  };

  render() {
    return (
      <div>
        {this.props.jobs.map(job => {
          return <Job key={job.id} title={job.title} company={job.company} />;
        })}
      </div>
    );
  }
}
