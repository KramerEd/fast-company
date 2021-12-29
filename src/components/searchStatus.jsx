const searchStatus = ({ length }) => {
    if (length <= 0) {
        return (
            <span className="badge bg-danger">
                Никто сегодня с тобой не тусанет
            </span>
        );
    } else if (length <= 4) {
        return (
            <span className="badge bg-primary">
                {length} человeка тусанут с тобой сегодня
            </span>
        );
    } else {
        return (
            <span className="badge bg-primary">
                {length} человек тусанет с тобой сегодня
            </span>
        );
    }
};

export default searchStatus;
