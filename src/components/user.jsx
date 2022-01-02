import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    return (
        <tr key={props.id}>
            <th scope="row">{props.name}</th>
            <td>
                {props.qualities.map((qua) => (
                    <Qualities {...qua} key={qua._id} />
                ))}
            </td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate} / 5</td>
            <td>
                <Bookmark
                    id={props.id}
                    handleToggleBookmark={props.onBookmark}
                    bookmark={props.bookmark}
                />
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={props.onDelete}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onBookmark: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired
};
export default User;
