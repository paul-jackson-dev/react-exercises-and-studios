
function HobbyLinks(){
    let hobbyLinks = ["http://reddit.com", "http://stackoverflow.com"];

    return (
        <div>
            <h2>Hobbies</h2>
            <a href = {hobbyLinks[0]}>google</a>
            <br></br>
            <a href = {hobbyLinks[1]}>stackoverflow</a>
        </div>

    );

}

export default HobbyLinks;