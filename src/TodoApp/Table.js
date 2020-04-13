import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <table>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
            </tr>
            <tr>
              <td>
                1<input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
            <tr>
              <td>
                2<input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default Table;
