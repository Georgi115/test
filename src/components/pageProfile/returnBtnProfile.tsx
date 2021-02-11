import React from "react";
import { connect } from "react-redux";
import { Istate } from "../appStartPage/IappStartPageInterface";
import { ImapStateToPropsPageProfile } from "./IpageProfileInterface";

const ReturnBtnProfile = (props: any) => {
  const { activeUser } = props;
  const { userProfile } = props;
  const findUser = activeUser.subscription.find(
    (el: string) => el === userProfile.name
  );

  return (
    <>
      {findUser ? (
        <button type="button" className="btn btn-success w-100 mt-2">
          Отписаться
        </button>
      ) : (
        <button type="button" className="btn btn-success w-100 mt-2">
          Подписаться
        </button>
      )}
    </>
  );
};

function mapStateToProps(state: Istate): ImapStateToPropsPageProfile {
  return {
    activeUser: state.appStartPageReducer.activeUser,
    userProfile: state.appStartPageReducer.userProfile,
  };
}

export default connect(mapStateToProps)(ReturnBtnProfile);
