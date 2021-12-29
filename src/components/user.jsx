import Qualities from "./qualities";
import Bookmark from "./bookmark";
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
export default User;
