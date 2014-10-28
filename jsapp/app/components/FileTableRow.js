/** @jsx React.DOM */

var React = require('react')
  , store = require('../lib/OneDriveStore')
  , iconMap = require('../lib/icons').iconMap;

var FileTableRow = module.exports = React.createClass({
  render: function() {
    var svg = function() { /*!
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" class="icon-download">
          <g>
            <path d="M62.838,74.173h-3.966V47.761c0-1.994-1.61-3.605-3.598-3.605h-9.819c-1.986,0-3.598,1.611-3.598,3.605v26.412h-3.972
c-0.908,0-1.736,0.534-2.118,1.355c-0.388,0.827-0.249,1.802,0.335,2.498l10.629,12.495c0.908,1.066,2.236,1.679,3.631,1.679
c1.4,0,2.73-0.612,3.636-1.679L64.62,78.026c0.592-0.696,0.724-1.671,0.342-2.498C64.581,74.707,63.752,74.173,62.838,74.173z"/>
            <path d="M79.991,25.074c-0.701-0.058-1.344-0.417-1.761-0.982c-4.027-5.453-10.496-8.818-17.378-8.818
c-0.438,0-0.877,0.013-1.316,0.04c-0.582,0.036-1.154-0.138-1.618-0.489c-4.188-3.165-9.264-4.88-14.581-4.88
c-9.521,0-17.971,5.522-21.91,13.882c-0.352,0.746-1.057,1.264-1.873,1.377C9.057,26.663,0.948,35.697,0.948,46.589
c0,11.903,9.685,21.588,21.59,21.588h15.319v-8.506H22.538c-7.214,0-13.083-5.869-13.083-13.083
c0-7.215,5.869-13.083,13.083-13.083c0.364,0,0.723,0.029,1.08,0.058c2.079,0.16,3.961-1.188,4.467-3.204
c1.759-7.011,8.032-11.908,15.252-11.908c4.125,0,8.029,1.593,10.993,4.485c1.014,0.989,2.452,1.408,3.838,1.12
c0.883-0.183,1.786-0.276,2.684-0.276c5.051,0,9.562,2.839,11.772,7.41c0.776,1.607,2.475,2.565,4.252,2.382
c0.442-0.044,0.884-0.066,1.313-0.066c7.214,0,13.083,5.869,13.083,13.083c0,7.213-5.869,13.083-13.083,13.083H62.872v8.506h15.316
c11.905,0,21.59-9.686,21.59-21.588C99.778,35.292,91.056,25.993,79.991,25.074z"/>
          </g>
        </svg>
    */ }.extractComment();

    return (
      <tr className={this.props.file.is_embeddable ? "FileTableRow" : "FileTableRow disabled"}>
        <td>
          <img src={iconMap[this.props.file.icon || 'file']} className="icon" />
          <span className="filename">{this.props.file.name}</span></td>
        <td>{this.props.file.kind}</td>
        <td>{this.props.file.file_size}</td>
        <td className="text-right">
          <a className="btn btn-sm btn-primary" dangerouslySetInnerHTML={{__html: svg}} href={this.props.file.homework_submission_url} />
        </td>
      </tr>
    );
  }
});

