import ProfileCard from "./ProfileCard"

export default function ProfileContainer() {
    return (
        <div className="profile-container">
            <ProfileCard name = "Steve" age = "42" bio = "Builds things from mined dirt and rock." />
            <ProfileCard name = "Mr. Bean" age = "60" bio = "Is a happy guy, lives alone, causes chaos wherever he goes." />
            <ProfileCard name = "Bubbles" age = "487" bio = "Son of Cthulu" />
        </div>
    );
}