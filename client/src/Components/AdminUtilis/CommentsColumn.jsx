import React from "react";

const CommentsColumn = () => {
  return (
    <div>
      {" "}
      <div class="form-box dashboard-card shadow-lg">
        <div class="form-title-wrap">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="">Notifications</h5>
            <button
              type="button"
              class="icon-element mark-as-read-btn ml-auto mr-0"
              data-toggle="tooltip"
              data-placement="left"
              title=""
              data-original-title="Mark all as read"
            >
              <i class="la la-check-square"></i>
            </button>
          </div>
        </div>
        <div class="form-content p-0">
          <div class="list-group drop-reveal-list">
            <a
              href="#"
              class="list-group-item list-group-item-action border-top-0"
            >
              <div class="msg-body d-flex align-items-center">
                <div class="icon-element flex-shrink-0 mr-3 ml-0">
                  <i class="la la-bell"></i>
                </div>
                <div class="msg-content w-100">
                  <h5 class=" pb-1">Status updated</h5>
                  <p class="msg-text">2 min ago</p>
                </div>
                <span
                  class="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Mark as read"
                >
                  <i class="la la-check-square"></i>
                </span>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="msg-body d-flex align-items-center">
                <div class="icon-element bg-1 flex-shrink-0 mr-3 ml-0">
                  <i class="la la-bell"></i>
                </div>
                <div class="msg-content w-100">
                  <h5 class=" pb-1">50% Discount Offer</h5>
                  <p class="msg-text">2 min ago</p>
                </div>
                <span
                  class="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Mark as read"
                >
                  <i class="la la-check-square"></i>
                </span>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="msg-body d-flex align-items-center">
                <div class="icon-element bg-2 flex-shrink-0 mr-3 ml-0">
                  <i class="la la-check"></i>
                </div>
                <div class="msg-content w-100">
                  <h5 class=" pb-1">Your account has been created</h5>
                  <p class="msg-text">1 day ago</p>
                </div>
                <span
                  class="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Mark as read"
                >
                  <i class="la la-check-square"></i>
                </span>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="msg-body d-flex align-items-center">
                <div class="icon-element bg-3 flex-shrink-0 mr-3 ml-0">
                  <i class="la la-user"></i>
                </div>
                <div class="msg-content w-100">
                  <h5 class=" pb-1">Your account updated</h5>
                  <p class="msg-text">2 hrs ago</p>
                </div>
                <span
                  class="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Mark as read"
                >
                  <i class="la la-check-square"></i>
                </span>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="msg-body d-flex align-items-center">
                <div class="icon-element bg-4 flex-shrink-0 mr-3 ml-0">
                  <i class="la la-lock"></i>
                </div>
                <div class="msg-content w-100">
                  <h5 class=" pb-1">Your password changed</h5>
                  <p class="msg-text">Yesterday</p>
                </div>
                <span
                  class="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Mark as read"
                >
                  <i class="la la-check-square"></i>
                </span>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <div class="msg-body d-flex align-items-center">
                <div class="icon-element bg-5 flex-shrink-0 mr-3 ml-0">
                  <i class="la la-user"></i>
                </div>
                <div class="msg-content w-100">
                  <h5 class=" pb-1">Your account updated</h5>
                  <p class="msg-text">2 hrs ago</p>
                </div>
                <span
                  class="icon-element mark-as-read-btn flex-shrink-0 ml-auto mr-0"
                  data-toggle="tooltip"
                  data-placement="left"
                  title=""
                  data-original-title="Mark as read"
                >
                  <i class="la la-check-square"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsColumn;
