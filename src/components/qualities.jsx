const Qualitie = ({ color, name, _id }) => {
    return (
        <span key={_id} className={"mx-1 badge bg-" + color}>
            {name}
        </span>
    );
};
export default Qualitie;
