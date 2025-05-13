export default function ProfileCard(props) {
    let { name, age, bio } = props;

    return (
        <div className="profile-card">
            <p><b>Name:</b> <span className="card-info">{name}</span></p>
            <p><b>Age:</b> <span className="card-info">{age}</span></p>
            <p><b>Bio:</b> <br/>
            <span className="card-info">{bio}</span></p>
        </div>
    );
}