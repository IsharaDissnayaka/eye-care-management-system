import React from 'react';

function Deletepopup() {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal123" data-bs-dismiss="modal">Delete Post</button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal123" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <h3>Conform Deleting</h3>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deletepopup;
